export default function SectionWrapper ({children}) {
    return (
        <div className="section-wrapper">
            <div className="section-content">
                {children}
            </div>
        </div>
    )
}