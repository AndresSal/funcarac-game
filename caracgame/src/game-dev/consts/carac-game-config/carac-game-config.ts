export const caracGameComponents = 
    {
        //pieces types
        pieces:[
            {
                id:1,
                key:'body-red',
                url:'assets/game-assets/carac-components/pieces/body-red.png'
            },
            {
                id:2,
                key:'body-yellow',
                url:'assets/game-assets/carac-components/pieces/body-yellow.png'
            },
            {
                id:3,
                key:'body-green',
                url:'assets/game-assets/carac-components/pieces/body-green.png'
            },
            {
                id:4,
                key:'body-blue',
                url:'assets/game-assets/carac-components/pieces/body-blue.png'
            }
        ],

    //piece label
    label:{
        key:'piece-label',
        url:'assets/game-assets/carac-components/pieces/label.png'
    },

    //TODO incluir las demas fotos en miniatu
    photo:{
        key:'piece-photo',
        url:'assets/game-assets/carac-components/photos/photo.png'
    },

    //board game
    board_game:{
        key:'board-game',
        url:'assets/game-assets/carac-components/board/carac-board.png',
        label:{
            key:'carac-label',
            url:'assets/game-assets/carac-components/board/carac-label.png'
        }
    },

    
    //pieces board
    pieces_board:{
        key:'pieces-board',
        url:'assets/game-assets/carac-components/board/pieces-board.png',
        label:{
            key:'board-label',
            url:'assets/game-assets/carac-components/board/piece-board-label.png'
        }
    },

    slot:{
        board:{
            key:'puzzle-slot',
            url:'assets/game-assets/carac-components/slot/board.png'
        },
        background:[
            {   id:1, 
                key:'back-red',
                url:'assets/game-assets/carac-components/slot/back-red.png',
                config:{
                    scale:{
                        // x:1.1,
                        // y:0.9
                        x:0.81,
                        y:0.6
                    },
                    // ring_radius:355
                    ring_radius:265
                }
            },
            {
                id:2, 
                key:'back-yellow',
                url:'assets/game-assets/carac-components/slot/back-yellow.png',
                config:{
                    scale:{
                        // x:0.8,
                        // y:0.7
                        x:0.62,
                        y:0.5
                    },
                    // ring_radius:260
                    ring_radius:199
                }
            },
            {
                id:3, 
                key:'back-green',
                url:'assets/game-assets/carac-components/slot/back-green.png',
                config:{
                    scale:{
                        // x:0.6,
                        // y:0.51
                        x:0.45,
                        y:0.4
                    },
                    ring_radius:145
                }
            },
            {
                id:4, 
                key:'back-blue',
                url:'assets/game-assets/carac-components/slot/back-blue.png',
                config:{
                    scale:{
                        // x:0.42,
                        // y:0.39
                        x:0.32,
                        y:0.3
                    },
                    ring_radius:105
                }
            },
        ]
    }
}