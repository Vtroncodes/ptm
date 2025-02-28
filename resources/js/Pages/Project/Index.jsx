import Pagination from "@/Components/Pagination";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { Link } from "@inertiajs/react";

export default function Index({ auth, projects }) {
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <h2 className="text-xl font-semibold leading-tight text-gray-800">
          Projects
        </h2>
      }
    >
      <Head title="Projects" />
      <div className="py-12">
        <div className="mx-auto max-w-8xl sm:px-6 lg:px-8">
          <div className="overflow-hidden bg-white shadow sm:rounded-lg">
            <div className="p-6 text-gray-900">
              <table className="w-full border-collapse rounded-lg shadow-md">
                <thead>
                  <tr className="bg-gray-800 text-white">
                    <th className="px-4 py-3 text-left">ID</th>
                    <th className="px-4 py-3 text-left">Title</th>
                    <th className="px-4 py-3 text-left">Description</th>
                    <th className="px-6 py-5 text-left">Status</th>
                    <th className="px-4 py-3 text-left">Created At</th>
                    <th className="px-4 py-3 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {projects.data.map((project, index) => (
                    <tr
                      key={project.id}
                      className={`border ${index % 2 === 0 ? "bg-gray-100" : "bg-white"
                        }`}
                    >
                      <td className="px-4 py-3 border">{project.id}</td>
                      <td className="px-4 py-3 border font-semibold">
                        {project.title}
                      </td>
                      <td className="px-4 py-3 border">{project.description}</td>
                      <td className="px-4 py-3 border">
                        <span
                          className={`px-2 py-1 text-sm font-medium rounded-full ${project.status === "active"
                            ? "bg-green-200 text-green-800"
                            : project.status === "pending"
                              ? "bg-yellow-200 text-yellow-800"
                              : "bg-red-200 text-red-800"
                            }`}
                        >
                          {project.status}
                        </span>
                      </td>
                      <td className="px-4 py-3 border">
                        {new Date(project.created_at).toLocaleDateString()}
                      </td>
                      <td className="px-4 py-3 border flex justify-center space-x-2">
                        {/* Edit Link */}
                        <Link
                          href={route("project.edit", project.id)}
                          className="px-3 py-1 text-sm font-medium text-white bg-blue-500 rounded hover:bg-blue-600 transition"
                        >
                          Edit
                        </Link>

                        {/* Delete Link */}
                        <Link
                          href={route("project.destroy", project.id)}
                          method="delete"
                          as="button"
                          className="px-3 py-1 text-sm font-medium text-white bg-red-500 rounded hover:bg-red-600 transition"
                        >
                          Delete
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <Pagination links={projects.meta.links}></Pagination>
              {projects.data.length === 0 && (
                <p className="mt-4 text-center text-gray-500">No projects found.</p>
              )}
            </div>
          </div>
        </div>
      </div>;

    </AuthenticatedLayout>
  );
}
