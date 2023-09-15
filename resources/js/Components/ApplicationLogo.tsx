
interface Props {
    className: string;
}
export default function ApplicationLogo({className}: Props) {
    return (
        <div className={className}>
            <img src={'/images/DC-Logo.png'}  alt={'Dyer Construction'}  className={'max-h-full max-w-full object-cover'}  />
        </div>
    );
}
