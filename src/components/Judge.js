import React from 'react'

export default function Judge(props) {
    const inc_score = (idx, inc) => {
        let new_arr = []
        for (let i = 0; i < props.part_scores.length; i++) {
            if (i !== idx) {
                new_arr.push({
                    "sn": props.part_scores[i]["sn"],
                    "name": props.part_scores[i]["name"],
                    "score": props.part_scores[i]["score"]
                })
            } else {
                new_arr.push({
                    "sn": props.part_scores[i]["sn"],
                    "name": props.part_scores[i]["name"],
                    "score": props.part_scores[i]["score"] + inc
                })
            }
        }
        props.set_score([...new_arr])
        return
    }
    return (
        <>
            <div className="mt-5 flex justify-center">
                <table className="border-collapse border border-gray-300">
                    <thead className="bg-blue-200">
                        <tr>
                            <th className="border border-gray-300 px-4 py-2">Serial Number</th>
                            <th className="border border-gray-300 px-4 py-2">Participant Name</th>
                            <th className="border border-gray-300 px-4 py-2">Score</th>
                            <th className="border border-gray-300 px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.part_scores.map((score) => {
                            return (
                                <tr>
                                    <th className="border border-gray-300 px-4 py-2">{score['sn']}</th>
                                    <th className="border border-gray-300 px-4 py-2">{score['name']}</th>
                                    <th className="border border-gray-300 px-4 py-2">{score['score']}</th>
                                    <th className="border border-gray-300 px-4 py-2">
                                        <button onClick={() => { inc_score(score["sn"]-1, -10) }} className="bg-blue-300 rounded-md mx-2 px-4 hover:bg-blue-600">-10</button>
                                        <button onClick={() => { inc_score(score["sn"]-1, -5) }} className="bg-blue-300 rounded-md mx-2 px-4 hover:bg-blue-600">-5</button>
                                        <button onClick={() => { inc_score(score["sn"]-1, -1) }} className="bg-blue-300 rounded-md mx-2 px-4 hover:bg-blue-600">-1</button>
                                        <button onClick={() => { inc_score(score["sn"]-1, 1) }} className="bg-blue-300 rounded-md mx-2 px-4 hover:bg-blue-600">+1</button>
                                        <button onClick={() => { inc_score(score["sn"]-1, 5) }} className="bg-blue-300 rounded-md mx-2 px-4 hover:bg-blue-600">+5</button>
                                        <button onClick={() => { inc_score(score["sn"]-1, 10) }} className="bg-blue-300 rounded-md mx-2 px-4 hover:bg-blue-600">+10</button>
                                    </th>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}