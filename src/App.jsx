import "./App.css";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import BlogPages from "./pages/BlogPages";
import ContactPage from "./pages/ContactPage";
import CartPage from "./pages/CartPage";
import AccountPage from "./pages/AccountPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import BlogDetailsPage from "./pages/BlogDetailsPage";
import UserPage from "./pages/Admin/UserPage";
import CategoryPage from "./pages/Admin/Categories/CategoryPage";
import UpdateCategoryPage from "./pages/Admin/Categories/UpdateCategoryPage";
import CreateCategoryPage from "./pages/Admin/Categories/CreateCategoryPage";
import CreateProductPage from "./pages/Admin/Products/CreateProductPage";
import ProductPage from "./pages/Admin/Products/ProductPage";
import UpdateProductPage from "./pages/Admin/Products/UpdateProductPage";
import CouponPage from "./pages/Admin/Coupons/CouponPage";
import CreateCouponPage from "./pages/Admin/Coupons/CreateCouponPage";
import UpdateCouponPage from "./pages/Admin/Coupons/UpdateCouponPage";
// import Success from "./pages/success";
import OrderPage from "./pages/Admin/OrderPage";
import DashboardPage from "./pages/DashboardPage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/blog" element={<BlogPages />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/account" element={<AccountPage />} />
      <Route path="/product/:id" element={<ProductDetailsPage />} />
      <Route path="/blog/:id" element={<BlogDetailsPage />} />
      {/* <Route path="/success" element={<Success />} /> */}

      {/*burada yıldız demek tüm admin sayfalarını direk yönlendirmek demek  */}
      <Route path="/admin/*">
        {/* admin paneli açılır açılmaz bu gelecek index */}
      <Route index element={<DashboardPage />} />
        <Route path="users" element={<UserPage />} />
        <Route path="orders" element={<OrderPage />} />

        <Route path="categories" element={<CategoryPage />} />
        <Route path="categories/update/:id" element={<UpdateCategoryPage />} />
        <Route path="categories/create" element={<CreateCategoryPage />} />
        <Route path="products/create" element={<CreateProductPage />} />
        <Route path="products" element={<ProductPage />} />
        <Route path="products/update/:id" element={<UpdateProductPage />} />
        <Route path="coupons/create" element={<CreateCouponPage />} />
        <Route path="coupons" element={<CouponPage />} />
        <Route path="coupons/update/:id" element={<UpdateCouponPage/>} />




      </Route>
    </Routes>
  );
}

export default App;
