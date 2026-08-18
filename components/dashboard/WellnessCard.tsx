"use client";

import Image from "next/image";
import { MapPin } from "lucide-react";
import { ALL_PROPERTIES, useDashboardFilters } from "@/components/filters/DashboardFilters";

type Notice = {
  text: string;
  time: string;
  location?: string;
  image: string;
};

type WellnessCardProps = {
  notices: Notice[];
};

export default function WellnessCard({
  notices,
}: WellnessCardProps) {
  const { property } = useDashboardFilters();
  const filteredNotices = property === ALL_PROPERTIES
    ? notices
    : notices.filter((notice) => notice.location === property);

  return (
    <aside className="h-full min-h-[390px] rounded-[24px] border border-gray-100 bg-white p-5 shadow-[0_4px_20px_rgba(0,0,0,0.025)]">
      <div className="flex items-center justify-between border-b border-gray-100 pb-5">
        <h2 className="text-[15px] font-bold text-gray-900">
          Wellness Activities
        </h2>

        <button className="text-[11px] font-medium text-[#3563f5]">
          View All
        </button>
      </div>

      <div>
        {filteredNotices.map((notice, index) => (
          <div
            key={`${notice.text}-${index}`}
            className="flex gap-3 border-b border-gray-100 py-4 last:border-0"
          >
            <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl bg-gray-100">
              <Image
                src={notice.image}
                alt={notice.text}
                fill
                sizes="48px"
                className="object-cover"
              />
            </div>

            <div className="min-w-0 flex-1">
              <p className="truncate text-[12px] font-medium leading-5 text-gray-700">
                {notice.text}
              </p>

              <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-[10px] text-gray-400">
                <span>{notice.time}</span>

                {notice.location && (
                  <>
                    <span>•</span>

                    <span className="flex min-w-0 items-center gap-1">
                      <MapPin size={10} className="shrink-0" />
                      <span className="truncate">
                        {notice.location}
                      </span>
                    </span>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
        {filteredNotices.length === 0 && (
          <p className="py-8 text-center text-xs text-gray-400">
            No wellness activities for this property.
          </p>
        )}
      </div>
    </aside>
  );
}
