import { Outlet, useNavigation } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Root = () => {
    const navigation = useNavigation();
    return (
        <div>
            <div className="container mx-auto">
                <Header></Header>
                {
                    (navigation.state === 'loading') ? 
                        <div className="flex justify-center items-center h-[90vh]">
                            <p className="text-3xl flex items-center gap-4">Loading <span class="loading loading-lg loading-spinner text-info"></span></p>
                        </div> : 
                        <Outlet></Outlet>
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;