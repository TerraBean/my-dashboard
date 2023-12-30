import {
  HomeIcon,
  DocumentDuplicateIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

const links = [
  { name: "Home", href: "/dashboard", icon: HomeIcon },
  {
    name: "Invoices",
    href: "/dashboard/invoice",
    icon: DocumentDuplicateIcon,
  },
  {
    name: 'Customers', 
    href:'/dashboard/customer',
    icon: UserGroupIcon
  }
];
export default function NavLinks() {
  return(
    <>
        {links.map((link) =>{
            const LinkIcon = link.icon;
            return(
                <a 
                key={link.name}
                className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
                href={link.href}>
                    <LinkIcon className="w-6"/>
                </a>
            )
        })}
    </>
  )
}
