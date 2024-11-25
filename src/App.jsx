import { BrowserRouter, Route, Routes } from "react-router-dom"
import RootLayout from "./layout/RootLayout"
import HomePage from  './pages/HomePage'
import Product from "./pages/Product"
import ProductsPage from "./pages/ProductsPage"
import AboutPage from "./pages/AboutPage"
import ContactPage from "./pages/ContactPage"
const App = () => {
  return (
    <BrowserRouter>
        <Routes>
                <Route path="/" element={<RootLayout />}>
                        <Route index element={<HomePage />}></Route>
                        <Route path="/products" element={<ProductsPage />}></Route>
                        <Route path="/product/:id" element={<Product />}></Route>
                        <Route path="/about" element={<AboutPage />}></Route>
                        <Route path="/contact" element={<ContactPage />}></Route>
                </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App