import Image from "next/image";

const PageCover = ({ url }) => {
    return (
        <div className="cover">
            <Image 
                src={url}
                alt=""
                layout="fill"
            />
        </div>
    );
};

export default PageCover;