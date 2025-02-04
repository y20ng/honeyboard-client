import useMyPage from '@/hooks/useMyPage';

import { AlgoDetailCard } from '../molecules';
import { getMyAlgorithmAPI } from '@/api/mypageAPI';

const MyAlgorithmList = () => {
    const { data } = useMyPage({
        queryFn: getMyAlgorithmAPI(),
        queryKey: 'myAlgorithm',
    });

    return (
        <div className="flex flex-col items-center gap-6 p-6">
            {data?.length ? (
                <>
                    <ul className="grid min-w-[1400px] grid-cols-4 gap-6">
                        {data.map((item) => (
                            <li key={item.id}>
                                <AlgoDetailCard
                                    problemId={item.problemId}
                                    solutionId={item.id}
                                    title={item.title}
                                    subTitle={item.problemTitle}
                                    memory={Number(item.memory)}
                                    time={Number(item.runtime)}
                                    language={item.languageName}
                                />
                            </li>
                        ))}
                    </ul>
                </>
            ) : (
                <div className="flex min-h-[200px] w-full items-center justify-center">
                    <p className="text-lg text-gray-500">
                        등록된 알고리즘 풀이가 없습니다.
                    </p>
                </div>
            )}
        </div>
    );
};

export default MyAlgorithmList;
