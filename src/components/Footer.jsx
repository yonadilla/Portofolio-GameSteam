export default function Footer({ darkMode }) {
  return (
    <div>
      <footer
        className={
          " flex justify-center fixed bottom-0 bg-text dark:bg-sidebar_Darkmode w-full"
        }
      >
        <div className=" flex text-xs items-center py-2 flex-col">
        <div className="">
          <p> &copy; 2023 created by yon</p>
          </div>
          <div>
            All icons From
            <a
              href="https://icons8.com/icons"
              className="text-underline pl-1 font-size-sm"
            >
              Icons8
            </a>{" "}
            And{" "}
            <a
              href="https://iconscout.com"
              className="text-underline font-size-sm"
            >
              IconScout
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
