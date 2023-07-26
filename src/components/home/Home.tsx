import { useData } from "../../hooks/useData";

//components
import Loading from '../common/Loading';
import Error from '../common/Error';
import HomeContent from "./HomeContent";

const Home = () => {

    const { data, error, isLoading, isSuccess } = useData();

    return (
        <>
            {isLoading && <Loading />}
            {error && <Error />}
            {(isSuccess && data) && <HomeContent data={data} />}
        </>            
    )
}

export default Home;