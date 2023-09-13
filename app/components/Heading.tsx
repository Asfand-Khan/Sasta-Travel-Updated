interface HeadingProps{
    title: string;
    subtitle?: string;
}

const Heading:React.FC<HeadingProps> = ({
    title,
    subtitle
}) => {
  return (
    <div>
        <p className="
            text-4xl
            font-bold
            text-white
            capitalize
            tracking-wider
        ">{title}</p>
        {subtitle && (
            <p className="
                mt-1
                text-white
                tracking-wider
                capitalize
            ">
                {subtitle}
            </p>
        )}
    </div>
  )
}

export default Heading