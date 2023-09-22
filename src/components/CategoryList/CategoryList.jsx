import { useEffect, useState } from "react";
import Category from "../Category/Category";

const CategoryList = () => {
    const [list, setList] = useState([]);
    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setList(data))
    }, [])
    return (
        <div className="my-16">
            <div className="text-center space-y-4">
                <h1 className="text-5xl font-bold">Job Category List</h1>
                <p className="text-gray-500">Explore thousands of job opportunities with all the information you need. It's your future!</p>
            </div>
            <div className="grid grid-cols-4 gap-4 my-8">
                {
                    list.map(category => <Category key={category.id} category={category}></Category>)
                }
            </div>
        </div>
    );
};

export default CategoryList;