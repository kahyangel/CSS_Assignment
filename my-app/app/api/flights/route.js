export async function GET(request) {
    return Response.json ({
        "destination": [
            {
                "japan": [
                    {
                        "airline": "Japan Airlines",
                        "price": 653
                        
                    },
                    {
                        "airline": "Singapore Airlines",
                        "price": 935
                    },
                    {
                        "airline": "Air Japan",
                        "price": 637
                    }
                ],
                "korea": [
                    {  
                        "airline": "Korean Air",
                        "price": 746
                    },
                    {
                        "airline": "Asiana Airlines",
                        "price": 503
                    },
                    {
                        "airline": "Singapore Airlines",
                        "price": 873
                    }
                ],
                "china": [
                    {
                        "airline": "China Eastern Airlines",
                        "price": 836
                    },
                    {
                        "airline": "Air China",
                        "price": 746
                    },
                    {
                        "airline": "Singapore Airlines",
                        "price": 928
                    }
                ]
            }
        ]
    })
}