import Cart from "@/component/Hooks/UseState/Cart";
import UseStateHookPage from "@/component/Hooks/UseState/UseStateHookPage";

const UseStatePage = () => {
  return (
    <div className="space-y-8 p-8">
      <p className="text-center text-3xl font-semibold">
        <u>Use State Hook</u>
      </p>
      <UseStateHookPage />
    </div>
  );
};

export default UseStatePage;
