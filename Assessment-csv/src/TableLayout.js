const TableLayout = ({Rk,  Players, Nation, Pos, Squad, Age, Born, ageChecked, PlayerChecked, PosChecked, BornChecked, NationChecked, SquadChecked}) => {
    return(
        <tr className="border border-slate-300">
            {/* <td>{Rk}</td> */}
            {PlayerChecked && <td>{Players}</td>}
            {NationChecked && <td>{Nation?.split(" ")[1]}</td>}
            {PosChecked && <td>{Pos}</td>}
            {SquadChecked && <td>{Squad}</td>}
            {ageChecked && <td>{Age?.split("-")[0]}</td>}
            {BornChecked && <td>{Born}</td>}
        </tr>
    )
}

export default TableLayout;