export default function SectionWrapper ({children, topBorder = false, bottomBorder = false, addPadding = false}) {
    return (
        <div className={`section-wrapper ${topBorder ? 'top-border' : ''} ${bottomBorder ? 'bottom-border' : ''}`}>
            <div className={`section-content ${addPadding ? 'add-padding' : ''}`}>
                {children}
            </div>
        </div>
    )
}