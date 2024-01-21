import {useEffect} from "react";
import instance from "../../service/AxiosOrder.jsx";

export default function View(){

    useEffect(() => {
        instance.get('/student/getAll')
            .then(function (response) {
                console.log(response)
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);

    return(
        <h1>View</h1>
    )
}
