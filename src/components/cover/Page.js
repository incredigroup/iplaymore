import Image from 'next/image';

const Page = ({page,  url }) => {
    return (
        <div className="demopage">
            <div className="img-container">
                <Image 
                    src={url}
                    alt=""
                    layout="fill"
                />
            </div>
            <div className="page-footer">- {page} -</div>
        </div>
    );
};

export default Page;