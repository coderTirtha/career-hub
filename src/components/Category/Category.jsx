const Category = ({ category }) => {
    const { logo, category_name, availability } = category;
    return (
        <div className="bg-[#f9f9ff] rounded-lg p-8">
            <img src={logo} alt="" className="bg-gray-100 p-2 rounded-lg" />
            <div className="mt-4 space-y-4">
                <h1 className="text-xl font-bold">{category_name}</h1>
                <p className="text-gray-500">{availability}</p>
            </div>
        </div>
    );
};

export default Category;