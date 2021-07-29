import React, { Component } from "react";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Container } from "@material-ui/core";

import './teams.css'



class Teams extends Component { 
    state = {
        teams: [
            { id: 1, nome: "Arsenal", P: 38, W: 26, L: 9, D: 3, F: 79, A: 36, PTS: 87 },
            { id: 2, nome: "Liverpool", P: 38, W: 24, L: 8, D: 6, F: 67, A: 30, PTS: 80 },
            { id: 3, nome: "Manchester_U", P: 38, W: 24, L: 5, D: 9, F: 87, A: 45, PTS: 77 },
            { id: 4, nome: "Newcastle", P: 38, W: 21, L: 8, D: 9, F: 74, A: 52, PTS: 71 },
            { id: 5, nome: "Leeds", P: 38, W: 18, L: 12, D: 8, F: 53, A: 37, PTS: 66 },
            { id: 6, nome: "Chelsea", P: 38, W: 17, L: 13, D: 8, F: 66, A: 38, PTS: 64 },
            { id: 7, nome: "West_Ham", P: 38, W: 15, L: 8, D: 15, F: 48, A: 57, PTS: 53 },
            { id: 8, nome: "Aston_Villa", P: 38, W: 12, L: 14, D: 12, F: 46, A: 47, PTS: 50 },
            { id: 9, nome: "Tottenham", P: 38, W: 14, L: 8, D: 16, F: 49, A: 53, PTS: 50 },
            { id: 10, nome: "Blackburn", P: 38, W: 12, L: 10, D: 16, F: 55, A: 51, PTS: 46 },
            { id: 11, nome: "Southampton", P: 38, W: 12, L: 9, D: 17, F: 46, A: 54, PTS: 45 },
            { id: 12, nome: "Middlesbrough", P: 38, W: 12, L: 9, D: 17, F: 35, A: 47, PTS: 45 },
            { id: 13, nome: "Fulham", P: 38, W: 10, L: 14, D: 14, F: 36, A: 44, PTS: 44 },
            { id: 14, nome: "Charlton", P: 38, W: 10, L: 14, D: 14, F: 38, A: 49, PTS: 44 },
            { id: 15, nome: "Everton", P: 38, W: 11, L: 10, D: 17, F: 45, A: 57, PTS: 43 },
            { id: 16, nome: "Bolton", P: 38, W: 9, L: 13, D: 16, F: 44, A: 62, PTS: 40 },
            { id: 17, nome: "Sunderland", P: 38, W: 10, L: 10, D: 18, F: 29, A: 51, PTS: 40 },
            { id: 18, nome: "Ipswich", P: 38, W: 9, L: 9, D: 20, F: 41, A: 64, PTS: 34 },
            { id: 19, nome: "Derby", P: 38, W: 8, L: 6, D: 24, F: 33, A: 63, PTS: 30 },
            { id: 20, nome: "Leicester", P: 38, W: 5, L: 13, D: 20, F: 30, A: 64, PTS: 28 },
        ]
    }

    render() {

        return (
            <Container style={{ marginTop: "20px", marginBottom: "20px" }}>
                <h2 align="center">Classifica</h2>
                <TableContainer component={Paper} xs={12} lg={12}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell id="tab" >Nome Team</TableCell>
                                <TableCell id="tab" align="right">P</TableCell>
                                <TableCell id="tab" align="right">W</TableCell>
                                <TableCell id="tab" align="right">L</TableCell>
                                <TableCell id="tab" align="right">D</TableCell>
                                <TableCell id="tab" align="right">F</TableCell>
                                <TableCell id="tab" align="right">A</TableCell>
                                <TableCell id="tab" align="right">PTS</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.teams.map(team => (
                                <TableRow key={team.id}>
                                    <TableCell component="th" scope="row" id="rows">
                                        {team.id}.{team.nome}
                                    </TableCell>
                                    <TableCell id="rows" align="right">{team.P}</TableCell>
                                    <TableCell id="rows" align="right">{team.W}</TableCell>
                                    <TableCell id="rows" align="right">{team.L}</TableCell>
                                    <TableCell id="rows" align="right">{team.D}</TableCell>
                                    <TableCell id="rows" align="right">{team.F}</TableCell>
                                    <TableCell id="rows" align="right">{team.A}</TableCell>
                                    <TableCell id="rows" align="right">{team.PTS}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        );
    }
}


export default Teams;