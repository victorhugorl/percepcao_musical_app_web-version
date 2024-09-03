export default () => {
    const classNameSet: string = "bg-success";
    return (
        <>
            <main
                className="bg-secondary-subtle d-flex justify-content-center align-items-center"
                style={{ height: "100dvh" }}
            >
                <article className={`${classNameSet} rounded-start`}>
                    oi
                </article>
                <article className="bg-light rounded-end">pessoa</article>
            </main>
        </>
    );
};
