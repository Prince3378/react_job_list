export const ApplyNow = () => {
  return (
    <form
      method="post"
      action="mailto:email.com"
      className="mb-8"
    >
      <button
        className="
          py-4 px-8
          text-xs font-semibold text-white uppercase
          rounded-lg bg-btnColor
          border-2 border-btnColor
          hover:bg-[#EFF0F5] hover:text-btnColor
          hover:border-2 hover:border-btnColor
          transition-all"
      >
        Apply now
      </button>
    </form>
  );
};
