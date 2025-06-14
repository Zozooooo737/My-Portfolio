import { BrowserRouter } from "react-router-dom";
import AppRouter from "@/routers/AppRouter";
import ScrollToTop from "@/components/layout/ScrollToTop";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppRouter />
    </BrowserRouter>
  );
}
