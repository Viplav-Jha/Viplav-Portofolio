const ResumePage: React.FC = () => {
    return (
      <div className="max-w-3xl m-auto py-10">
        <iframe
          src="/viplavResume.pdf"
          width="100%"
          height="600px"
          className="border rounded"
        ></iframe>
        <div className="flex justify-end mt-4">
          <a
            href="/viplavResume.pdf"
            download
            className="px-4 py-2 bg-gray-100 text-gray-800 rounded transition transform duration-300 ease-in-out hover:bg-gray-200 hover:scale-105"
          >
            Download Resume
          </a>
        </div>
      </div>
    );
  };
  
  export default ResumePage;
  