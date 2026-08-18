"use client";

import { usePropertyFilter } from "@/components/filters/DashboardFilters";

type Priority = "Critical" | "High";
type Status = "In progress" | "At risk" | "Open";

type ActionRow = {
  priority: Priority;
  issue: string;
  property: string;
  owner: string;
  due: string;
  status: Status;
};

const actions: ActionRow[] = [
  {
    priority: "Critical",
    issue: "Accommodation disruption",
    property: "Olhuveli",
    owner: "HR / Engineering",
    due: "—",
    status: "In progress",
  },
  {
    priority: "Critical",
    issue: "Accommodation delivery risk",
    property: "Iru Fushi",
    owner: "HR / Projects",
    due: "—",
    status: "At risk",
  },
  {
    priority: "Critical",
    issue: "Quota allocation / registration",
    property: "Head Office",
    owner: "HR",
    due: "—",
    status: "In progress",
  },
  {
    priority: "High",
    issue: "Turnover above 2%",
    property: "Vilu Reef",
    owner: "Property HR",
    due: "—",
    status: "Open",
  },
  {
    priority: "High",
    issue: "Turnover above 2%",
    property: "Iru Veli",
    owner: "Property HR",
    due: "—",
    status: "Open",
  },
  {
    priority: "High",
    issue: "Absenteeism 5.47%",
    property: "Iru Fushi",
    owner: "Property HR",
    due: "—",
    status: "Open",
  },
];

function priorityClass(priority: Priority) {
  if (priority === "Critical") {
    return "bg-[#fff0ee] text-[#c84a45]";
  }

  return "bg-[#fff4df] text-[#b96c10]";
}

function statusClass(status: Status) {
  switch (status) {
    case "In progress":
      return "bg-[#fff4df] text-[#b96c10]";

    case "At risk":
      return "bg-[#fff0ee] text-[#c84a45]";

    case "Open":
      return "bg-[#fff0ee] text-[#c84a45]";
  }
}

export default function ManagementActionRegister() {
  const filteredActions = usePropertyFilter(actions);
  return (
    <div>
      <div className="mb-4 flex items-start justify-between gap-4">
        <h2 className="text-[20px] font-bold tracking-[-0.3px] text-[#102b3d]">
          Management Action Register
        </h2>

        <span className="shrink-0 rounded-full bg-[#edf8f6] px-3 py-1.5 text-xs font-medium text-[#147c78]">
          Action centre
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[1050px]">
          <thead>
            <tr className="border-b border-[#e7e4df]">
              <th className="w-[120px] px-2 py-3 text-left text-sm font-semibold text-[#74818d]">
                Priority
              </th>

              <th className="px-2 py-3 text-left text-sm font-semibold text-[#74818d]">
                Issue
              </th>

              <th className="w-[170px] px-2 py-3 text-left text-sm font-semibold text-[#74818d]">
                Property
              </th>

              <th className="w-[190px] px-2 py-3 text-left text-sm font-semibold text-[#74818d]">
                Owner
              </th>

              <th className="w-[90px] px-2 py-3 text-center text-sm font-semibold text-[#74818d]">
                Due
              </th>

              <th className="w-[150px] px-2 py-3 text-right text-sm font-semibold text-[#74818d]">
                Status
              </th>
            </tr>
          </thead>

          <tbody>
            {filteredActions.map((action) => (
              <tr
                key={`${action.issue}-${action.property}`}
                className="border-b border-[#ece8e1] last:border-b-0"
              >
                <td className="px-2 py-4">
                  <span
                    className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${priorityClass(
                      action.priority
                    )}`}
                  >
                    {action.priority}
                  </span>
                </td>

                <td className="px-2 py-4 text-sm font-medium text-[#102b3d]">
                  {action.issue}
                </td>

                <td className="px-2 py-4 text-sm text-[#102b3d]">
                  {action.property}
                </td>

                <td className="px-2 py-4 text-sm text-[#102b3d]">
                  {action.owner}
                </td>

                <td className="px-2 py-4 text-center text-sm text-[#102b3d]">
                  {action.due}
                </td>

                <td className="px-2 py-4 text-right">
                  <span
                    className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${statusClass(
                      action.status
                    )}`}
                  >
                    {action.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}