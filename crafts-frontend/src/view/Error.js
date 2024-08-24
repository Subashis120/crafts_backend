import { useLocation } from "react-router-dom";
import Navbar from '../components/Navbar';

export default function Error() {
    const { state } = useLocation();
    const { data } = state;

    let errorMsg = '';
    let img = '';

    switch (data) {
        case 401:
            errorMsg = "Oops!!! You are not Authorized. Please Log In";
            img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlAXCw6k1joCtqZbK-KKsFGl3Jtn-fvqQMGg&s"
            break;
        case 503:
            errorMsg = "Please ComeBack Later";
            img = "https://cdni.iconscout.com/illustration/premium/thumb/server-error-4498097-3779861.png?f=webp"
            break;
        case 404:
            errorMsg = "Not Found";
            img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSutELEBC3Xsv1-jmpcyVdpHY_Q6x9DkJABRQ&s"
        case 400:
            errorMsg = "Not a Good Request";
            img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcFRl5rjHT17KzUYXh9LYSvWOelSMuczMl-g&s"
        case 500:
            errorMsg = "We are working on it";
            img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcFRl5rjHT17KzUYXh9LYSvWOelSMuczMl-g&s"

        default:
            break;
    }

    console.log("msg ", errorMsg);

    return (
        <>
            <Navbar />
            <div className="flex justify-center items-center">
                <span className="mt-40 text-yellow-800 text-2xl">
                    {errorMsg}
                </span>
            </div>
            <div className="flex justify-center items-center">
                <img src={img} className="w-80 h-70 pt-0" />
            </div>
        </>
    );
}