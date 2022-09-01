import { toast } from "react-toastify";

export const notify = (orders) => {
  toast("✅ SUCCESS! Your Order ID... " + orders, {
    theme: "dark",
    position: "top-center",
    autoClose: 10000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};
