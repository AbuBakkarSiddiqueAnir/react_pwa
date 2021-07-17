import React, {
    useState,
    useEffect
} from 'react';
import UtubeApi from "./Api/UtubeApi";



const Utube = ({
    searchTerm
}) => {
    const [videos, setVideos] = useState([])

    useEffect(() => {
        const onSearchSubmit = async () => {
            try {
                const {
                    data
                } = await UtubeApi.get("/search", {
                    params: {
                        q: searchTerm
                    },
                });
                console.log(data.items)

                setVideos(data.items)

            } catch (e) {
                console.log(e);
            }
        };

        if (searchTerm && !videos.length) {
            onSearchSubmit();
        } else {
            var timeoutId = setTimeout(() => {
                if (searchTerm) {
                    onSearchSubmit();
                }
            }, 500);
        }

        return () => {
            clearTimeout(timeoutId);
        };
    }, [searchTerm]);


    return (
        <div>anir</div>
    )

}

export default Utube;