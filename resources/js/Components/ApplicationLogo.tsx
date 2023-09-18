
interface Props {
    className: string;
}
export default function ApplicationLogo() {
    return (
        <div className={'h-full w-80 grid'}>
            <img src={'/images/DC-Logo.png'}  alt={'Dyer Construction'}  className={'w-full object-contain min-h-0 h-full'}  />
        </div>

    );
}
