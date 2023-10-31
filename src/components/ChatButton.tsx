const ChatButton = () => {
  const whatsappLink = "https://api.whatsapp.com/send?phone=19996286293";
   return (
    <div className="relative">
      <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
        <button className="flex flex-col justify-around text-purple-500 rounded-lg">
          <div
            style={{
              boxShadow: '0px 0px 10px rgba(136, 35, 106, 0.774)',
              padding: '0.4em',
              borderRadius: '0.6em',
              whiteSpace: 'nowrap',
            }}
          >
            <svg
              className="w-6 h-6 lg:w-10 lg:h-10 xl:w-12 xl:h-12"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                clipRule="evenodd"
              ></path>
            </svg>
            {/* <span className="font-bold text-slate-900">Contato</span> */}
          </div>
        </button>
      </a>
    </div>
  );
}
export default ChatButton;