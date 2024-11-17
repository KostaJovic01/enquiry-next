type Size = 'full' | 'screen' | 'max' | 'min' | '10' | '20' | '30' | '40' | '50' | '60' | '70' | '80' | '90' | '100';
type Props = {
    width?: Size;
    height?: Size;
};
const Box = (props: Props) => {
    return (
        <div id={'box'} className={` w-${props.width?? '10'} h-${props.height?? '10'} bg-amber-700`}/>
    );
};
export default Box;
