function MiniProfile() {
  return (
    <div className="flex items-center justify-between mt-14 ml-10" >
      <img
        className="w-16 h-16 rounded-full border p-[2px]"
        src="https://images.unsplash.com/photo-1635510238080-435081d5e7d0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"
        alt=""
      />
      <div className="flex-1 mx-4">
        <h2 className="font-bold">Paulberttt</h2>
        <h3 className="text-sm text-gray-400">Welcome to ig</h3>
      </div>
      <button  className="text-blue-400 text-sm font-semibold ">Sign Out</button>
    </div>
  );
}

export default MiniProfile;
