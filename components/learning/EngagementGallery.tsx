import Image from "next/image";

const activities = [
  {
    title: "Beach Cleaning",
    property: "Siyam World",
    image: "/images/siyam_world.jpg",
  },
  {
    title: "Blood Donation",
    property: "Iru Fushi",
    image: "/images/iruveli.jpg",
  },
  {
    title: "Island Cleaning",
    property: "Iru Veli",
    image: "/images/iruveli.jpg",
  },
];

export default function EngagementGallery() {
  return (
    <div>
      <div className="mb-4 flex items-center justify-between gap-4">
        <h2 className="text-[18px] font-bold tracking-[-0.3px] text-[#102b3d]">
          Employee Engagement & Wellness
        </h2>

        <span className="shrink-0 rounded-full bg-[#edf8f6] px-3 py-1.5 text-xs font-medium text-[#147c78]">
          Gallery concept
        </span>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {activities.map((activity) => (
          <div
            key={`${activity.title}-${activity.property}`}
            className="group relative min-h-[190px] overflow-hidden rounded-[20px] bg-gradient-to-br from-[#dcefeb] to-[#f6e4b9]"
          >
            <Image
              src={activity.image}
              alt={`${activity.title} at ${activity.property}`}
              fill
              className="object-cover transition duration-500 group-hover:scale-[1.03]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 p-4">
              <p className="text-base font-bold text-white">
                {activity.title} · {activity.property}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}