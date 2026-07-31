import type { RouteObject } from "react-router"
import Home from "./components/home/Home"
import Products from "./components/products/Products"
import Contact from "./components/contact/Contact"
import NotFound from "./components/not-found/NotFound"

/** Routes shown in the header/footer navigation, in display order. */
export const navRoutes = [
  { path: "/", labelKey: "nav.home", element: <Home /> },
  { path: "/products", labelKey: "nav.products", element: <Products /> },
  { path: "/contact", labelKey: "nav.contact", element: <Contact /> },
] as const

export const routes: RouteObject[] = [
  ...navRoutes.map(({ path, element }) => ({ path, element })),
  { path: "*", element: <NotFound /> },
]
