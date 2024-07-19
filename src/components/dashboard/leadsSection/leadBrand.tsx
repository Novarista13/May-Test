const LeadBrand = () => {
  return (
    <div className="flex flex-col text-center mr-4 mt-8 mb-2 gap-y-2">
      <div className="flex flex-row justify-center items-center space-x-3">
        <svg
          fill="#000000"
          viewBox="0 0 24 24"
          role="img"
          className="w-8 h-8"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <title>Pepsi icon</title>
            <path d="M12 0C8.93 0 5.86 1.17 3.517 3.514c-4.688 4.686-4.688 12.284 0 16.971 4.685 4.686 12.284 4.687 16.97 0 4.686-4.687 4.686-12.286-.002-16.97A11.958 11.958 0 0012.001 0zm0 .864c2.506 0 4.817.828 6.678 2.226a23.118 23.118 0 01-15.64 15.52A11.085 11.085 0 01.865 12C.865 5.85 5.85.864 12 .864zm9.342 5.08A11.082 11.082 0 0123.136 12c0 6.15-4.986 11.135-11.136 11.135a11.11 11.11 0 01-8.542-3.994c6.766-2.132 11.665-2.135 15.027-4.611 1.933-1.425 3.205-3.698 3.205-6.283 0-.802-.123-1.575-.348-2.303Z"></path>
          </g>
        </svg>
        <div className="text-sm font-bold">Global SpaceX</div>
      </div>
      <div className="text-sm font-bold text-muted-foreground">
        Mutual Leads
      </div>
    </div>
  );
};

export default LeadBrand;
