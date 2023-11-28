import { useEffect, useState } from "react";
import { Logo } from "../@types/Logo";

function useLogoData() {
    const [logo, setLogo] = useState<Logo[]>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/logo?populate=*`, {
            method: "GET",
            headers: {
                Authorization: "bearer " + process.env.REACT_APP_ADMIN_TOKEN,
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setLogo(data.data);
                setTimeout(() => setLoading(false), 500);
            });
    }, []);

    return {
        logo,
        loading,
    };
}

export default useLogoData;
