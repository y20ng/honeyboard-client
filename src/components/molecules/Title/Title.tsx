import { Icon } from '@/components/atoms';

export interface TitleProps {
    onClickLike?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    title: string;
    author?: string;
    subTitle?: Record<string, string>;
    description?: Record<string, string>;
    isLiked?: boolean;
}

const Title = ({
    title,
    author,
    subTitle,
    description,
    isLiked = false,
    onClickLike,
}: TitleProps) => {
    const subTitleEntries = Object.entries(subTitle || {});
    const descriptionEntries = Object.entries(description || {});
    const hasContent =
        subTitleEntries.length > 0 || descriptionEntries.length > 0;

    return (
        <div className="flex w-full flex-col">
            {/* 제목 */}
            <div className="flex items-center">
                <h2 className="text-display-sm font-bold text-gray-900">
                    {title}
                </h2>
                {onClickLike && (
                    <button onClick={onClickLike} className="px-1">
                        <Icon id={isLiked ? 'star' : 'star-empty'} size={28} />
                    </button>
                )}
            </div>

            {/* 작성자 */}
            {author && (
                <div className="mt-1">
                    <span className="text-md font-semibold text-gray-900">
                        {author}
                    </span>
                </div>
            )}

            {/* 부제와와 요약 */}
            {hasContent && (
                <div className="mt-3 flex w-full flex-col gap-2 bg-gray-50 px-3 py-2">
                    {/* 부제 */}
                    {subTitleEntries.map(([key, value], index) => (
                        <div
                            key={`subtitle-${index}`}
                            className="flex items-start gap-2"
                        >
                            <h3 className="whitespace-nowrap text-xl font-semibold text-gray-900">
                                {key}
                            </h3>
                            <p className="break-words text-xl font-medium text-gray-900">
                                {value}
                            </p>
                        </div>
                    ))}

                    {/* 요약 */}
                    {descriptionEntries.map(([key, value], index) => (
                        <div
                            key={`description-${index}`}
                            className="flex items-start gap-2"
                        >
                            <span className="text-md whitespace-nowrap font-semibold text-gray-900">
                                {key}
                            </span>
                            <p className="text-md break-words font-medium text-gray-900">
                                {value}
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Title;
