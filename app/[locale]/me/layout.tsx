type Props = {
    children: React.ReactNode;
};
const Layout = (props: Props) => {
    return (
        <div className={'h-screen w-screen flex-col flex '}>
            {props.children}</div>
    );
};
export default Layout;
