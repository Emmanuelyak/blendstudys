import AdminNav from "../admin-nav";

function Tutorial2() {
  return (
    <div className="relative mb-32 md:mb-3">
      <div className="h-1/4 sticky top-0 z-50">
        <AdminNav title={"Tutorials"} />
      </div>
      <div className="w-100 lg:w-10/12 2xl:w-6/12 m-auto md:mt-20 mt-1"> 
        <div>
          <h3>Tutorials</h3>
        </div>

        <div className="bg-gray-100 w-full md:flex md:items-start gap-5 px-10 py-5 rounded-md mb-4 mt-4 md:mt-10">
          <div className="p-6 flex justify-center items-center md:block bg-sub-bg w-18">
            <div className="w-10">
              <img src="groups-237661.png" alt="" className="w-full" />
            </div>
          </div>
          <div>
            <h5 className="mb-4">What is the purpose of the platform</h5>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500sLorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s Lorem Ipsum is
              simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled
              it to make a type specimen book. It has survived not only five
              centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s
              with the release of Letraset sheets containing Lorem Ipsum
              passages, and more recently with desktop publishing software like
              Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is
              simply dummy text of the printing and typesetting industry. t was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Tutorial2;
