const projects = [
  {
    initiative: "Accommodation improvement",
    scope: "Group",
    priority: "High",
    status: "In progress",
  },
  {
    initiative: "Policy harmonization",
    scope: "Group",
    priority: "Medium",
    status: "In progress",
  },
  {
    initiative: "AI in HR & Training",
    scope: "Group",
    priority: "High",
    status: "Planned",
  },
  {
    initiative: "AI-enabled HR software",
    scope: "Group",
    priority: "Strategic",
    status: "Long term",
  },
  {
    initiative: "Leave Policy",
    scope: "Group",
    priority: "Medium",
    status: "Drafting",
  },
  {
    initiative: "Training & Development Policy",
    scope: "Group",
    priority: "Medium",
    status: "Drafting",
  },
];

function statusClass(status: string) {
  switch (status) {
    case "In progress":
      return "bg-[#fff4df] text-[#b96c10]";
    case "Planned":
      return "bg-[#fff4df] text-[#b96c10]";
    case "Long term":
      return "bg-[#fff4df] text-[#b96c10]";
    case "Drafting":
      return "bg-[#fff4df] text-[#b96c10]";
    default:
      return "bg-gray-100 text-gray-600";
  }
}

export default function TransformationPortfolio() {
  return (
    <div>
      <div className="mb-4 flex items-start justify-between gap-4">
        <h2 className="text-[18px] font-bold tracking-[-0.3px] text-[#102b3d]">
          Transformation Portfolio
        </h2>

        <span className="shrink-0 rounded-full bg-[#edf8f6] px-3 py-1.5 text-xs font-medium text-[#147c78]">
          Project tracker
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[900px]">
          <thead>
            <tr className="border-b border-[#e7e4df]">
              <th className="px-2 py-3 text-left text-sm font-semibold text-[#74818d]">
                Initiative
              </th>

              <th className="px-2 py-3 text-left text-sm font-semibold text-[#74818d]">
                Scope
              </th>

              <th className="px-2 py-3 text-left text-sm font-semibold text-[#74818d]">
                Priority
              </th>

              <th className="px-2 py-3 text-right text-sm font-semibold text-[#74818d]">
                Status
              </th>
            </tr>
          </thead>

          <tbody>
            {projects.map((project) => (
              <tr
                key={project.initiative}
                className="border-b border-[#ece8e1] last:border-b-0"
              >
                <td className="px-2 py-4 text-sm font-medium text-[#102b3d]">
                  {project.initiative}
                </td>

                <td className="px-2 py-4 text-sm text-[#102b3d]">
                  {project.scope}
                </td>

                <td className="px-2 py-4 text-sm text-[#102b3d]">
                  {project.priority}
                </td>

                <td className="px-2 py-4 text-right">
                  <span
                    className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${statusClass(
                      project.status
                    )}`}
                  >
                    {project.status}
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