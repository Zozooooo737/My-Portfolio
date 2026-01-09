import { BrowserRouter } from "react-router-dom";
import AppRouter from "@/routers/AppRouter";
import ScrollToTop from "@/components/layout/ScrollToTop";

import { MathJaxContext } from "better-react-mathjax";

const mathJaxConfig = {
  tex: {
    inlineMath: [["\\(", "\\)"]],
    displayMath: [["\\[", "\\]"]],
  },
};

export default function App() {
  return (
    <MathJaxContext config={mathJaxConfig}>
      <BrowserRouter>
        <ScrollToTop />
        <AppRouter />
      </BrowserRouter>
    </MathJaxContext>
  );
}
