

interface DividerProps {
    text: string;
}

const Divider = ({ text }:DividerProps) => {
    return (
        <div className="flex items-center justify-center">
            <div className="flex flex-col items-center">
                {/* Top Line */}
                <div className="h-32 w-[1px] bg-gray-300"></div>
                {/* Text */}
                <span className="text-gray-700 text-xs font-light my-1">{text}</span>
                {/* Bottom Line */}
                <div className="h-32 w-[1px] bg-gray-300"></div>
            </div>
        </div>
    );
};

export default Divider;