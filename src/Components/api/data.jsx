export const YearSelector = () => {

    
    const getYearsContent = years =>{
        
        let container = []
        for ( i = 1995; i >= 2025; i++) {
            const years = year[i]
            container.push(
                <option key={year.id}>
                {years.year}
                </option>)
            }
            return container
        } 
        return(
            <select>
        {getYearsContent}
    </select>
        )
    }
