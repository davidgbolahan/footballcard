import './App.css'
import Player from './component/player'

function App() {
    const playerProfile = [
        {
            image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSBzvtIfL1CdJOgjukTftEL9YekPO9T_gOTH2HCWq87KUm0PWro',
            playerName: 'Lionel Messi',
            team: ' PSG',
            nationality: 'Argentina',
            age: '36',
            jerseyNumber: '30',
        },
        {
            image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR-32SBacPtEbz50hIW3B-pfs_jzSoS7hvLJ527G-yYnlHYI5pF',
            playerName: 'Cristiano Ronaldo',
            team: 'Al Nassr',
            nationality: 'Portugal',
            age: '38',
            jerseyNumber: '7',
        },
        {
            image: 'https://upload.wikimedia.org/wikipedia/commons/e/e9/ISL-HRV_%287%29.jpg',
            playerName: 'Luka Modrić',
            team: 'Real Madrid',
            nationality: 'Croatia',
            age: '38',
            jerseyNumber: '10',
        },
        {
            image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSm1IwsPZDVXMagZrFcX2o8neNG5SoTD1Gxnx1A_ApzHw3TBcuP',
            playerName: 'Kylian Mbappé',
            team: ' Paris Saint-Germain ',
            nationality: ' France',
            age: '24',
            jerseyNumber: '10',
        },
        {
            image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSYWhI7TCv3XhwY1rcvjB7B_sFrAYUvLKQMgPJIaGO-qlIx2pSa',
            playerName: 'Neymar',
            team: 'PSG',
            nationality: 'Brazil',
            age: '31',
            jerseyNumber: '',
        },
        {
            image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRSx5EKZHirVVSRbMBJrvERDeZ5p1L6k_nAjIZMxKQKh4ElDakW',
            playerName: 'Robert Lewandowski',
            team: 'Barcelona',
            nationality: 'Poland ',
            age: '35',
            jerseyNumber: '9',
        },
        {
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYfiqtwgOKQBQOZchhCUH8wHlzY2hDmcS7F9agGDH6VQ&s',
            playerName: 'Erling Haaland ',
            team: 'Manchester City',
            nationality: 'Norway',
            age: '23',
            jerseyNumber: '9',
        },
        {
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqS92VJYn19JWd__DKCHpCZT7JO-LgC571yUH459Xd&s',
            playerName: 'Mohammed Salah',
            team: 'Liverpool',
            nationality: 'Egypt',
            age: '31',
            jerseyNumber: '11',
        }
    ]
    return (
            <>
            <h1>Players Profile</h1>
            <div className='grid'>
                {  playerProfile.map(({image,  playerName, team, nationality, age, jerseyNumber, index}) => (
                        <Player
                        key = {index}
                        image = {image}
                        playerName = {playerName}
                        team = {team}
                        nationality = {nationality}
                        age = {age}
                        jerseyNumber = {jerseyNumber}
                        />

                        
                    ))}
                
            </div>
            </>
    )
}

export default App