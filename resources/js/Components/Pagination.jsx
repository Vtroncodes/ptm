import { Link } from "@inertiajs/react";

export default function Pagination({ links }) {
  return (
    <nav className="text-center mt-4 flex justify-center space-x-2">
      {links.map((link, index) => (
        link.url ? ( // Only render if URL exists
          <Link
            key={index}
            href={link.url}
            dangerouslySetInnerHTML={{ __html: link.label }}
            className={`px-3 py-1 text-sm font-medium rounded-full border ${link.active
              ? "bg-blue-500 text-white"
              : "bg-white text-gray-500 border-gray-300"
              } `}
          />
        ) : (
          <span
            key={index}
            className="px-3 py-1 text-sm font-medium rounded-full border bg-gray-200 text-gray-400 cursor-not-allowed"
            dangerouslySetInnerHTML={{ __html: link.label }}
          />
        )
      ))}
    </nav>
  );
}
