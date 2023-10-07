///<reference types="cypress"/>
describe('Intercept', () => {
    it.skip('gaana.com validate Singer List',()=>{
        cy.intercept({
            method:"POST",
            url:"https://gaana.com/apiv2?factor=11&id=5&type=albumArtistSongs"
        }).as('getArtistList')
        cy.visit('https://gaana.com/')
        cy.get('.t_wrap [href="/song/udd-jaa-kaale-kaava-from-gadar-2"]').click()
        cy.wait('@getArtistList').then(({response})=>{
            response.body.entities.forEach((el)=>{
                cy.get(`[title='${el.name}']`).should('be.exist')
            })
        })
    })
    it('gaana.com validate Singer List',()=>{
        cy.fixture('interceptData').then((mockData)=>{
            cy.intercept({
                method:"POST",
                url:"https://gaana.com/apiv2?factor=11&id=5&type=albumArtistSongs"
            },{
                    "count": "248",
                    "status": 1,
                    "eof": 0,
                    "entities": [
                        {
                            "language": "Marathi",
                            "seokey": "jai-mata-di-karta-chal-by-udit-narayan-zee-music-devotional-3",
                            "name": "Jai Mata Di Karta Chal by Udit Narayan - Zee Music Devotional",
                            "artwork": "https://a10.gaanacdn.com/gn_img/albums/Dk9KNk23Bx/9KNgeGE23B/size_m.jpg",
                            "atw": "https://a10.gaanacdn.com/gn_img/albums/Dk9KNk23Bx/9KNgeGE23B/size_m.jpg",
                            "atwj": "https://a10.gaanacdn.com/gn_img/albums/Dk9KNk23Bx/9KNgeGE23B/size_m.jpg",
                            "entity_id": "54214468",
                            "entity_type": "TR",
                            "artwork_medium": "https://a10.gaanacdn.com/gn_img/albums/Dk9KNk23Bx/9KNgeGE23B/size_l.jpg",
                            "favorite_count": 0,
                            "premium_content": "0",
                            "user_favorite": 0,
                            "entity_info": [
                                {
                                    "key": "vgid",
                                    "value": "K7vOp"
                                },
                                {
                                    "key": "stream_url",
                                    "value": {
                                        "medium": {
                                            "message": "/PXDlMo67L4ssymkjHOGPNgaoh8Ou9LKJSyF01YhszRwbmMsiQ0EuQhA+hznM1PBycfWXv0yg1cE3o9uoq7anz4n209IMEJBkd1xMS7T7Vkeu7SUcOqufA/xN+XGbPZ0GgS9amHDrdi7BbqoH99XxKYiD17U4PBeFdbBftgnpR5OuLfz3H4SgWURydjwQguxiLvLp84ODH/YO1WqYUlQnuV70xkxJWUdo0KzA8hykSWI1FpGeKTbAerPJ+xdrVBC",
                                            "bitRate": "64",
                                            "expiryTime": 1696704908
                                        },
                                        "high": {
                                            "message": "/PXDlMo67L4ssymkjHOGPNgaoh8Ou9LKJSyF01YhszRwbmMsiQ0EuQhA+hznM1PB+jyam+m8dZH4k7/MsRH+jXOsXyYv9yYCHN9XbqwNl6hilcM6KTd4TSSGVbeSohjDkm1h3I3i8N7qXFIQxL4PiBHqmYXX+1b2LOJynenV5jP0Rzmer1Fcs/HnE3g9KmcoYyXDbot4V7swgJiT3edHExt7MzVnBCvtzytmPGTlTp5wIaUPRdpTz0WTaR1BUhab",
                                            "bitRate": "128",
                                            "expiryTime": 1696704908
                                        },
                                        "auto": {
                                            "message": "/PXDlMo67L4ssymkjHOGPNgaoh8Ou9LKJSyF01YhszRwbmMsiQ0EuQhA+hznM1PBFL7h9ZHWHP2BCRn/QMc3EgbLxOGRb5efTf/lD1wOOlP4N47tNR2CYiSL1CbzDGmLrnd6wwdS4pSfR/atzFHUdcgdPZjNVpHS9iUaLjnE/1MiaWpwgQ+57CYtyojtgbWnk6ssiwiJg35ZHbSJsTWIZOloiw3+x+YU1/QDTTNB02nF0wjzd7+ZEHrTtqOpVZ5P",
                                            "bitRate": "",
                                            "expiryTime": 1696704908
                                        }
                                    }
                                },
                                {
                                    "key": "artist",
                                    "value": [
                                        {
                                            "artist_id": "5",
                                            "name": "Ankit Pukale",
                                            "seokey": "ankit-pukale"
                                        },
                                        {
                                            "artist_id": "1750693",
                                            "name": "Sanjeev Chaturvedi",
                                            "seokey": "sanjeev-chaturvedi"
                                        }
                                    ]
                                },
                                {
                                    "key": "album",
                                    "value": [
                                        {
                                            "album_id": "8176367",
                                            "name": "Navratri Special Devi Bhakti Geet",
                                            "album_seokey": "navratri-special-devi-bhakti-geet"
                                        }
                                    ]
                                },
                                {
                                    "key": "operator",
                                    "value": [
                                        {
                                            "name": "JIO",
                                            "st": 1590019200000,
                                            "et": 1747785600000,
                                            "message": "Jai Mata Di",
                                            "short_code": "56789"
                                        }
                                    ]
                                },
                                {
                                    "key": "operators",
                                    "value": [
                                        {
                                            "name": "JIO",
                                            "st": 1590019200000,
                                            "et": 1747785600000,
                                            "message": "Jai Mata Di",
                                            "short_code": "56789"
                                        }
                                    ]
                                },
                                {
                                    "key": "lyrics_url",
                                    "value": ""
                                },
                                {
                                    "key": "parental_warning",
                                    "value": 0
                                },
                                {
                                    "key": "play_ct",
                                    "value": "<100K"
                                },
                                {
                                    "key": "artwork_large",
                                    "value": "https://a10.gaanacdn.com/gn_img/albums/Dk9KNk23Bx/9KNgeGE23B/size_l.jpg"
                                },
                                {
                                    "key": "sap_id",
                                    "value": ""
                                },
                                {
                                    "key": "country",
                                    "value": "1"
                                },
                                {
                                    "key": "mobile",
                                    "value": "1"
                                },
                                {
                                    "key": "duration",
                                    "value": "177"
                                },
                                {
                                    "key": "isrc",
                                    "value": "INZ031409671"
                                },
                                {
                                    "key": "is_most_popular",
                                    "value": 0
                                },
                                {
                                    "key": "stream_type",
                                    "value": "rtmp"
                                },
                                {
                                    "key": "is_local",
                                    "value": "0"
                                },
                                {
                                    "key": "content_source",
                                    "value": 1
                                },
                                {
                                    "key": "av_ad",
                                    "value": 0
                                },
                                {
                                    "key": "youtube_id",
                                    "value": ""
                                },
                                {
                                    "key": "rest_lev",
                                    "value": "0"
                                },
                                {
                                    "key": "modified_on_solr",
                                    "value": "1696644626000"
                                },
                                {
                                    "key": "download_enabled",
                                    "value": 0
                                },
                                {
                                    "key": "secondary_language",
                                    "value": "Hindi"
                                },
                                {
                                    "key": "ppd",
                                    "value": 0
                                },
                                {
                                    "key": "is_premium",
                                    "value": 1
                                },
                                {
                                    "key": "preview_url",
                                    "value": {
                                        "message": "pSFO08Pw4dp3VRAsttmfT0IAjKH9TD83ae87pFTzfpQKPtv+O7ka7drzLSEJ1QK2j6HrvxqTNCEz1oEz5OCGuc7Kq+Fe5pbrBxoADZ2Pny29vK1ScQumFrK1hYDGzeF1Ii66hHcPsFl0MVjGJX1H9g==",
                                        "expiryTime": 1696704908
                                    }
                                }
                            ]
                        },
                        {
                            "language": "Hindi",
                            "seokey": "Cypress-trap-mix",
                            "name": "Cypress - Trap Mix",
                            "artwork": "https://a10.gaanacdn.com/gn_img/albums/BZgWoOW2d9/gWoznk2m32/size_m.jpg",
                            "atw": "https://a10.gaanacdn.com/gn_img/albums/BZgWoOW2d9/gWoznk2m32/size_m.jpg",
                            "atwj": "https://a10.gaanacdn.com/gn_img/albums/BZgWoOW2d9/gWoznk2m32/size_m.jpg",
                            "entity_id": "54187112",
                            "entity_type": "TR",
                            "artwork_medium": "https://a10.gaanacdn.com/gn_img/albums/BZgWoOW2d9/gWoznk2m32/size_l.jpg",
                            "favorite_count": 0,
                            "premium_content": "0",
                            "user_favorite": 0,
                            "entity_info": [
                                {
                                    "key": "vgid",
                                    "value": "YRE1R"
                                },
                                {
                                    "key": "stream_url",
                                    "value": {
                                        "medium": {
                                            "message": "/PXDlMo67L4ssymkjHOGPNgaoh8Ou9LKJSyF01YhszSmWmRxGeb5j+5Oo6YhqFUDv/zRtT8/ayhfLkD8Q9CL8jXEdAgg6SVFONL08Zy7TAa+gyzAudd4d4tK6SAlPTfMXN2OfwmnI/OpIsYHjHi57/+SyqzcmCWFRJmGs7k+eYw5hzAsdRM1/dsi3gK+IJqYosgBcWwxFc/n72tfeF2CAg3ri8tV9tM90p/cn3eN62n+kqfbe40M4YT9J6CtSQDh",
                                            "bitRate": "64",
                                            "expiryTime": 1696704908
                                        },
                                        "high": {
                                            "message": "/PXDlMo67L4ssymkjHOGPNgaoh8Ou9LKJSyF01YhszSmWmRxGeb5j+5Oo6YhqFUDbeMSyT9+TGD9wKDVBBP69ExUX911UUNFm4nNrbZpicaPGlt4x4yUWjpsvdm2OADpfzLhhGsdPRlWKCc5CAvP6CFbS1fND0FGaEpO1sHoLR+DIFHy8TPCExRIC5tVak5iT1SDcxiHAJcpt9XYzs3wy7RmAGXAmAE445jGyModcrrHRYyOEjU9ZxGmMqagjqJW",
                                            "bitRate": "128",
                                            "expiryTime": 1696704908
                                        },
                                        "auto": {
                                            "message": "/PXDlMo67L4ssymkjHOGPNgaoh8Ou9LKJSyF01YhszSmWmRxGeb5j+5Oo6YhqFUDmzkv72OJk87hwPX3Ym1lUSuAdibKViGpFm9myTIiCg66oDn7e2n5ivZq7k0zfmFYTPqA2dDSvIcZgnez/TiedobAbPKav++6lQg2CKOsCGQ81DtM26wo64zGWiFCXdls2mPuJ93aP2FKvNfRjc+YD4QyM/iEwqfFR9M6fvEl6hmqAD/4BEbC5vcAA4fM7kOx",
                                            "bitRate": "",
                                            "expiryTime": 1696704908
                                        }
                                    }
                                },
                                {
                                    "key": "artist",
                                    "value": [
                                        {
                                            "artist_id": "1658656",
                                            "name": "Anurag-Abhishek",
                                            "seokey": "anurag-abhishek"
                                        },
                                        {
                                            "artist_id": "4",
                                            "name": "Shreya Ghoshal",
                                            "seokey": "shreya-ghoshal"
                                        },
                                        {
                                            "artist_id": "5",
                                            "name": "Udit Narayan",
                                            "seokey": "udit-narayan"
                                        }
                                    ]
                                },
                                {
                                    "key": "album",
                                    "value": [
                                        {
                                            "album_id": "8167812",
                                            "name": "Woh Humse Khafa Hain - Trap Mix",
                                            "album_seokey": "woh-humse-khafa-hain-trap-mix"
                                        }
                                    ]
                                },
                                {
                                    "key": "operator",
                                    "value": [
                                        {
                                            "name": "JIO",
                                            "st": 1590019200000,
                                            "et": 1747785600000,
                                            "message": "Woh Humse Khafa",
                                            "short_code": "56789"
                                        }
                                    ]
                                },
                                {
                                    "key": "operators",
                                    "value": [
                                        {
                                            "name": "JIO",
                                            "st": 1590019200000,
                                            "et": 1747785600000,
                                            "message": "Woh Humse Khafa",
                                            "short_code": "56789"
                                        }
                                    ]
                                },
                                {
                                    "key": "lyrics_url",
                                    "value": ""
                                },
                                {
                                    "key": "parental_warning",
                                    "value": 0
                                },
                                {
                                    "key": "play_ct",
                                    "value": "<100K"
                                },
                                {
                                    "key": "artwork_large",
                                    "value": "https://a10.gaanacdn.com/gn_img/albums/BZgWoOW2d9/gWoznk2m32/size_l.jpg"
                                },
                                {
                                    "key": "sap_id",
                                    "value": ""
                                },
                                {
                                    "key": "country",
                                    "value": "1"
                                },
                                {
                                    "key": "mobile",
                                    "value": "1"
                                },
                                {
                                    "key": "duration",
                                    "value": "143"
                                },
                                {
                                    "key": "isrc",
                                    "value": "INH102313878"
                                },
                                {
                                    "key": "is_most_popular",
                                    "value": 0
                                },
                                {
                                    "key": "stream_type",
                                    "value": "rtmp"
                                },
                                {
                                    "key": "is_local",
                                    "value": "0"
                                },
                                {
                                    "key": "content_source",
                                    "value": 1
                                },
                                {
                                    "key": "av_ad",
                                    "value": 0
                                },
                                {
                                    "key": "youtube_id",
                                    "value": ""
                                },
                                {
                                    "key": "rest_lev",
                                    "value": "0"
                                },
                                {
                                    "key": "modified_on_solr",
                                    "value": "1696483814000"
                                },
                                {
                                    "key": "download_enabled",
                                    "value": 0
                                },
                                {
                                    "key": "secondary_language",
                                    "value": "Hindi"
                                },
                                {
                                    "key": "ppd",
                                    "value": 0
                                },
                                {
                                    "key": "is_premium",
                                    "value": 1
                                },
                                {
                                    "key": "preview_url",
                                    "value": {
                                        "message": "pSFO08Pw4dp3VRAsttmfT0IAjKH9TD83ae87pFTzfpQKPtv+O7ka7drzLSEJ1QK2j6HrvxqTNCEz1oEz5OCGuc7Kq+Fe5pbrBxoADZ2Pny29vK1ScQumFrK1hYDGzeF1Ii66hHcPsFl0MVjGJX1H9g==",
                                        "expiryTime": 1696704908
                                    }
                                }
                            ]
                        },
                        {
                            "language": "Hindi",
                            "seokey": "udd-jaa-kaale-kaava-from-gadar-2",
                            "name": "Udd Jaa Kaale Kaava (From \"Gadar 2\")",
                            "artwork": "https://a10.gaanacdn.com/gn_img/albums/6Zxb27K9wN/xb2qrjNoW9/size_m_1688020211.jpg",
                            "atw": "https://a10.gaanacdn.com/gn_img/albums/6Zxb27K9wN/xb2qrjNoW9/size_m_1688020211.jpg",
                            "atwj": "https://a10.gaanacdn.com/gn_img/albums/6Zxb27K9wN/xb2qrjNoW9/size_m_1688020211.jpg",
                            "entity_id": "52575016",
                            "entity_type": "TR",
                            "artwork_medium": "https://a10.gaanacdn.com/gn_img/albums/6Zxb27K9wN/xb2qrjNoW9/size_l_1688020211.jpg",
                            "favorite_count": 27656,
                            "premium_content": "0",
                            "user_favorite": 0,
                            "entity_info": [
                                {
                                    "key": "vgid",
                                    "value": "K7vOp"
                                },
                                {
                                    "key": "stream_url",
                                    "value": {
                                        "medium": {
                                            "message": "/PXDlMo67L4ssymkjHOGPNgaoh8Ou9LKJSyF01YhszRpOLjXCpEepY+EGQ8aRK03693bYSPup2sPSohMMnTgsLwA+ZN3fKhN49SpNAZTkYCWc7aUDWkaZQL3bA84c0QNyg0tsheqm7mECaLsnOwbsJXR0TleWi/HXU+Ywsjm0uQErWH4TbU/X93fFtvR47TPbrQ5bt1N6AMkbALfoNeRjoLwxJd+vWyc69AX4uFQ8zP3yn05kMznuTOmTPA3yoQa",
                                            "bitRate": "64",
                                            "expiryTime": 1696704908
                                        },
                                        "high": {
                                            "message": "/PXDlMo67L4ssymkjHOGPNgaoh8Ou9LKJSyF01YhszRpOLjXCpEepY+EGQ8aRK03V+ynWYkSNP+By59zxU/Bz4vh61eAKdHtZEORFoaacTthvyPyI5vj85jxuMqSOoh2nlaxtWIrsq3nHplVr6+54DPwzgEq+1dZEPV6H3X0gJE76LoQp14o7EmLUijkoUVJ/cT/2NrAy2tfh/C7wGP7uccW4OG580NxBFNInpGQ6To3P7OshMxkrjmHYJ0uZTzt",
                                            "bitRate": "128",
                                            "expiryTime": 1696704908
                                        },
                                        "auto": {
                                            "message": "/PXDlMo67L4ssymkjHOGPNgaoh8Ou9LKJSyF01YhszRpOLjXCpEepY+EGQ8aRK03/EdV/JrVx8jvsmAbJkHxD4NfLVG2wGNkxuDhVkWpQLQ3tkJdQYwQHsZI0ZYvVlVgoFenXhPmONQaQPfNsP19QFzlyC3z2qkebRkStZmCS7T++dTnOjrln7gE4Pn8ItzKOMQQ0c4OvOgkJUQS3GC+pmsGw02nn6QV3qAMKQ7xTZlYKDUSMt37n3mv8hnTIqnT",
                                            "bitRate": "",
                                            "expiryTime": 1696704908
                                        }
                                    }
                                },
                                {
                                    "key": "artist",
                                    "value": [
                                        {
                                            "artist_id": "5",
                                            "name": "Udit Narayan",
                                            "seokey": "udit-narayan"
                                        },
                                        {
                                            "artist_id": "10",
                                            "name": "Alka Yagnik",
                                            "seokey": "alka-yagnik"
                                        },
                                        {
                                            "artist_id": "27",
                                            "name": "Mithoon",
                                            "seokey": "mithoon"
                                        },
                                        {
                                            "artist_id": "2986",
                                            "name": "Uttam Singh",
                                            "seokey": "uttam-singh"
                                        }
                                    ]
                                },
                                {
                                    "key": "album",
                                    "value": [
                                        {
                                            "album_id": "7596342",
                                            "name": "Udd Jaa Kaale Kaava (From \"Gadar 2\")",
                                            "album_seokey": "udd-jaa-kaale-kaava-from-gadar-2"
                                        }
                                    ]
                                },
                                {
                                    "key": "operator",
                                    "value": [
                                        {
                                            "name": "JIO",
                                            "st": 1590019200000,
                                            "et": 1747785600000,
                                            "message": "Udd Jaa Kaale",
                                            "short_code": "56789"
                                        }
                                    ]
                                },
                                {
                                    "key": "operators",
                                    "value": [
                                        {
                                            "name": "JIO",
                                            "st": 1590019200000,
                                            "et": 1747785600000,
                                            "message": "Udd Jaa Kaale",
                                            "short_code": "56789"
                                        }
                                    ]
                                },
                                {
                                    "key": "lyrics_url",
                                    "value": ""
                                },
                                {
                                    "key": "parental_warning",
                                    "value": 0
                                },
                                {
                                    "key": "play_ct",
                                    "value": "1M+"
                                },
                                {
                                    "key": "artwork_large",
                                    "value": "https://a10.gaanacdn.com/gn_img/albums/6Zxb27K9wN/xb2qrjNoW9/size_l_1688020211.jpg"
                                },
                                {
                                    "key": "sap_id",
                                    "value": ""
                                },
                                {
                                    "key": "country",
                                    "value": "1"
                                },
                                {
                                    "key": "mobile",
                                    "value": "1"
                                },
                                {
                                    "key": "duration",
                                    "value": "288"
                                },
                                {
                                    "key": "isrc",
                                    "value": "INZ031413259"
                                },
                                {
                                    "key": "is_most_popular",
                                    "value": 0
                                },
                                {
                                    "key": "stream_type",
                                    "value": "rtmp"
                                },
                                {
                                    "key": "is_local",
                                    "value": "0"
                                },
                                {
                                    "key": "content_source",
                                    "value": 1
                                },
                                {
                                    "key": "av_ad",
                                    "value": 0
                                },
                                {
                                    "key": "youtube_id",
                                    "value": ""
                                },
                                {
                                    "key": "rest_lev",
                                    "value": "0"
                                },
                                {
                                    "key": "tags",
                                    "value": [
                                        {
                                            "tag_id": 103,
                                            "tag_name": "Romance"
                                        }
                                    ]
                                },
                                {
                                    "key": "modified_on_solr",
                                    "value": "1696644643000"
                                },
                                {
                                    "key": "download_enabled",
                                    "value": 0
                                },
                                {
                                    "key": "secondary_language",
                                    "value": "Hindi"
                                },
                                {
                                    "key": "ppd",
                                    "value": 0
                                },
                                {
                                    "key": "is_premium",
                                    "value": 1
                                },
                                {
                                    "key": "preview_url",
                                    "value": {
                                        "message": "pSFO08Pw4dp3VRAsttmfT0IAjKH9TD83ae87pFTzfpQKPtv+O7ka7drzLSEJ1QK2j6HrvxqTNCEz1oEz5OCGuc7Kq+Fe5pbrBxoADZ2Pny29vK1ScQumFrK1hYDGzeF1Ii66hHcPsFl0MVjGJX1H9g==",
                                        "expiryTime": 1696704908
                                    }
                                }
                            ]
                        },
                        {
                            "language": "Hindi",
                            "seokey": "main-nikla-gaddi-leke-from-gadar-2",
                            "name": "Main Nikla Gaddi Leke (From \"Gadar 2\")",
                            "artwork": "https://a10.gaanacdn.com/gn_img/albums/koMWQBbqLE/MWQ4Dx5E3q/size_m.jpg",
                            "atw": "https://a10.gaanacdn.com/gn_img/albums/koMWQBbqLE/MWQ4Dx5E3q/size_m.jpg",
                            "atwj": "https://a10.gaanacdn.com/gn_img/albums/koMWQBbqLE/MWQ4Dx5E3q/size_m.jpg",
                            "entity_id": "53166131",
                            "entity_type": "TR",
                            "artwork_medium": "https://a10.gaanacdn.com/gn_img/albums/koMWQBbqLE/MWQ4Dx5E3q/size_l.jpg",
                            "favorite_count": 9129,
                            "premium_content": "0",
                            "user_favorite": 0,
                            "entity_info": [
                                {
                                    "key": "vgid",
                                    "value": "K7vOp"
                                },
                                {
                                    "key": "stream_url",
                                    "value": {
                                        "medium": {
                                            "message": "/PXDlMo67L4ssymkjHOGPNgaoh8Ou9LKJSyF01YhszRGYm03cV2Dp0lpqQ2Uk6yFlKgjGcgbqRZaprN74Kb3rQOPWjjd3oMvPCthpqwcERlD7Ub7UIEMZq23RvOxyjAwIrlF8XTy+Ni3iC9KFwQ6wrrdenJsKy72qARbsVU3ZwbWFTov+8tKPK9T+0k/Rpu4OacDZWaLBQUyjP8acdkBufoLQY+qmLtv7v6dEFg4BKjIelkBqaTe6usSHKl+VDZt",
                                            "bitRate": "64",
                                            "expiryTime": 1696704908
                                        },
                                        "high": {
                                            "message": "/PXDlMo67L4ssymkjHOGPNgaoh8Ou9LKJSyF01YhszRGYm03cV2Dp0lpqQ2Uk6yFlb75NIKOPBKESSdOcBkWh38CAVG8KnBkIdv85kk5cbRh38E4t6KKYoIGqfdABuHznayuJ7zx81+xKKGd5Af8OzkN09EEoOncN6xBwFdT8vcHbJBTavNfQbjhc7U55PWnDgJskztDWNqg9kB4uhU5wZFAK5HtSbeTJEkDcWaEcpX3m4zN2iak5U6+HZ99JwGt",
                                            "bitRate": "128",
                                            "expiryTime": 1696704908
                                        },
                                        "auto": {
                                            "message": "/PXDlMo67L4ssymkjHOGPNgaoh8Ou9LKJSyF01YhszRGYm03cV2Dp0lpqQ2Uk6yF6h4qzKenTW1mqf9p2fEYQF6JKaguENXGHn0ajO3RpBUjHwxW4rBhsCp4jhXJTW0VUfv1u+vA6fEbujR2WcpH+f89CZ7FnEjoMCUjrdbXJjE4HbGE1rfHGJocl8aku7uR9DW6X1s2uwvtRAmweHld7l4MW+u4ObGuJipy48cRcrjpc/sHAthL3FrVopA6q7yz",
                                            "bitRate": "",
                                            "expiryTime": 1696704908
                                        }
                                    }
                                },
                                {
                                    "key": "artist",
                                    "value": [
                                        {
                                            "artist_id": "5",
                                            "name": "Udit Narayan",
                                            "seokey": "udit-narayan"
                                        },
                                        {
                                            "artist_id": "130",
                                            "name": "Aditya Narayan",
                                            "seokey": "aditya-narayan"
                                        },
                                        {
                                            "artist_id": "27",
                                            "name": "Mithoon",
                                            "seokey": "mithoon"
                                        },
                                        {
                                            "artist_id": "2986",
                                            "name": "Uttam Singh",
                                            "seokey": "uttam-singh"
                                        }
                                    ]
                                },
                                {
                                    "key": "album",
                                    "value": [
                                        {
                                            "album_id": "7801106",
                                            "name": "Main Nikla Gaddi Leke (From \"Gadar 2\")",
                                            "album_seokey": "main-nikla-gaddi-leke-from-gadar-2"
                                        }
                                    ]
                                },
                                {
                                    "key": "operator",
                                    "value": [
                                        {
                                            "name": "JIO",
                                            "st": 1590019200000,
                                            "et": 1747785600000,
                                            "message": "Main Nikla Gaddi",
                                            "short_code": "56789"
                                        }
                                    ]
                                },
                                {
                                    "key": "operators",
                                    "value": [
                                        {
                                            "name": "JIO",
                                            "st": 1590019200000,
                                            "et": 1747785600000,
                                            "message": "Main Nikla Gaddi",
                                            "short_code": "56789"
                                        }
                                    ]
                                },
                                {
                                    "key": "lyrics_url",
                                    "value": ""
                                },
                                {
                                    "key": "parental_warning",
                                    "value": 0
                                },
                                {
                                    "key": "play_ct",
                                    "value": "500K+"
                                },
                                {
                                    "key": "artwork_large",
                                    "value": "https://a10.gaanacdn.com/gn_img/albums/koMWQBbqLE/MWQ4Dx5E3q/size_l.jpg"
                                },
                                {
                                    "key": "sap_id",
                                    "value": ""
                                },
                                {
                                    "key": "country",
                                    "value": "1"
                                },
                                {
                                    "key": "mobile",
                                    "value": "1"
                                },
                                {
                                    "key": "duration",
                                    "value": "230"
                                },
                                {
                                    "key": "isrc",
                                    "value": "INZ031413424"
                                },
                                {
                                    "key": "is_most_popular",
                                    "value": 0
                                },
                                {
                                    "key": "stream_type",
                                    "value": "rtmp"
                                },
                                {
                                    "key": "is_local",
                                    "value": "0"
                                },
                                {
                                    "key": "content_source",
                                    "value": 1
                                },
                                {
                                    "key": "av_ad",
                                    "value": 0
                                },
                                {
                                    "key": "youtube_id",
                                    "value": ""
                                },
                                {
                                    "key": "rest_lev",
                                    "value": "0"
                                },
                                {
                                    "key": "modified_on_solr",
                                    "value": "1696644643000"
                                },
                                {
                                    "key": "download_enabled",
                                    "value": 0
                                },
                                {
                                    "key": "secondary_language",
                                    "value": "Hindi"
                                },
                                {
                                    "key": "ppd",
                                    "value": 0
                                },
                                {
                                    "key": "is_premium",
                                    "value": 1
                                },
                                {
                                    "key": "preview_url",
                                    "value": {
                                        "message": "pSFO08Pw4dp3VRAsttmfT0IAjKH9TD83ae87pFTzfpQKPtv+O7ka7drzLSEJ1QK2j6HrvxqTNCEz1oEz5OCGuc7Kq+Fe5pbrBxoADZ2Pny29vK1ScQumFrK1hYDGzeF1Ii66hHcPsFl0MVjGJX1H9g==",
                                        "expiryTime": 1696704908
                                    }
                                }
                            ]
                        },
                        {
                            "language": "Hindi",
                            "seokey": "main-khiladi-1",
                            "name": "Main Khiladi",
                            "artwork": "https://a10.gaanacdn.com/gn_img/albums/2lV3dl13Rg/V3dl92vx3R/size_m.jpg",
                            "atw": "https://a10.gaanacdn.com/gn_img/albums/2lV3dl13Rg/V3dl92vx3R/size_m.jpg",
                            "atwj": "https://a10.gaanacdn.com/gn_img/albums/2lV3dl13Rg/V3dl92vx3R/size_m.jpg",
                            "entity_id": "49790525",
                            "entity_type": "TR",
                            "artwork_medium": "https://a10.gaanacdn.com/gn_img/albums/2lV3dl13Rg/V3dl92vx3R/size_l.jpg",
                            "favorite_count": 39546,
                            "premium_content": "0",
                            "user_favorite": 0,
                            "entity_info": [
                                {
                                    "key": "vgid",
                                    "value": "yYj93"
                                },
                                {
                                    "key": "stream_url",
                                    "value": {
                                        "medium": {
                                            "message": "/PXDlMo67L4ssymkjHOGPNgaoh8Ou9LKJSyF01YhszRciU8HRS3R6+DSd8QJCclmaG/p6BDE3XCAUXHPQOdE7sM9AtT3U4F3rGQ/XypXMqmtcdq7y0+txbizai5IiXTKSsvNubbo+V4IYPixrAYG/R8Vc589KXifhU+6d3/sFJI/Rl5+YXbPCrprmxpBNVVki8kKEVF9O696enxNN3M3H/GyTYOuoCyiO/5fo/UPBHZySqtaGHrPcKFueN3MalEw",
                                            "bitRate": "64",
                                            "expiryTime": 1696704908
                                        },
                                        "high": {
                                            "message": "/PXDlMo67L4ssymkjHOGPNgaoh8Ou9LKJSyF01YhszRciU8HRS3R6+DSd8QJCclmTvT45681nCc1A0vXAHW+0v+2SZi63sTRkgxFDyh6dTKsIEt9NoWWjlSjGcb7bw4kqrXQhChvNWf3yxHLMDs1AlpZxuETsNGCL2KtLtk2pHgzTPyd4xOBYOJvMpZeS0HWKfScPjN7xY3sL/bfCeBrcHXzy509QdP7d3UWxthEIj8epHl4p4LnJfR+Rj/nPTej",
                                            "bitRate": "128",
                                            "expiryTime": 1696704908
                                        },
                                        "auto": {
                                            "message": "/PXDlMo67L4ssymkjHOGPNgaoh8Ou9LKJSyF01YhszRciU8HRS3R6+DSd8QJCclmo8GuxuTJsLpThdCeuHvmIPrDxH6S/4GgpJbGt3gaifOuE0QzA+GiJgYDDFIB4cLDSU/vC+NTyo5Mxa43CLSe9anVPvwPkA5jsf0bihzf7Cck6TchiwDeVQpSGHtK/aciotWgHP69yKF1JrAwpgAJdq3f9OmXD4fpEqaSxawKb4BVEnjngBWnYHrE1ixiDmhk",
                                            "bitRate": "",
                                            "expiryTime": 1696704908
                                        }
                                    }
                                },
                                {
                                    "key": "artist",
                                    "value": [
                                        {
                                            "artist_id": "5",
                                            "name": "Udit Narayan",
                                            "seokey": "udit-narayan"
                                        },
                                        {
                                            "artist_id": "245104",
                                            "name": "Abhijeet Bhattacharya",
                                            "seokey": "abhijeet-1"
                                        },
                                        {
                                            "artist_id": "767572",
                                            "name": "Tanishk Bagchi",
                                            "seokey": "tanishk"
                                        }
                                    ]
                                },
                                {
                                    "key": "album",
                                    "value": [
                                        {
                                            "album_id": "6892578",
                                            "name": "Main Khiladi (From \"Selfiee\")",
                                            "album_seokey": "main-khiladi-from-selfiee"
                                        }
                                    ]
                                },
                                {
                                    "key": "operator",
                                    "value": [
                                        {
                                            "name": "JIO",
                                            "st": 1590019200000,
                                            "et": 1747785600000,
                                            "message": "Main Khiladi",
                                            "short_code": "56789"
                                        }
                                    ]
                                },
                                {
                                    "key": "operators",
                                    "value": [
                                        {
                                            "name": "JIO",
                                            "st": 1590019200000,
                                            "et": 1747785600000,
                                            "message": "Main Khiladi",
                                            "short_code": "56789"
                                        }
                                    ]
                                },
                                {
                                    "key": "lyrics_url",
                                    "value": ""
                                },
                                {
                                    "key": "parental_warning",
                                    "value": 0
                                },
                                {
                                    "key": "play_ct",
                                    "value": "1M+"
                                },
                                {
                                    "key": "artwork_large",
                                    "value": "https://a10.gaanacdn.com/gn_img/albums/2lV3dl13Rg/V3dl92vx3R/size_l.jpg"
                                },
                                {
                                    "key": "sap_id",
                                    "value": ""
                                },
                                {
                                    "key": "country",
                                    "value": "1"
                                },
                                {
                                    "key": "mobile",
                                    "value": "1"
                                },
                                {
                                    "key": "duration",
                                    "value": "187"
                                },
                                {
                                    "key": "isrc",
                                    "value": "FR2X42317374"
                                },
                                {
                                    "key": "is_most_popular",
                                    "value": 0
                                },
                                {
                                    "key": "stream_type",
                                    "value": "rtmp"
                                },
                                {
                                    "key": "is_local",
                                    "value": "0"
                                },
                                {
                                    "key": "content_source",
                                    "value": 1
                                },
                                {
                                    "key": "av_ad",
                                    "value": 0
                                },
                                {
                                    "key": "youtube_id",
                                    "value": ""
                                },
                                {
                                    "key": "rest_lev",
                                    "value": "0"
                                },
                                {
                                    "key": "tags",
                                    "value": [
                                        {
                                            "tag_id": 100,
                                            "tag_name": "Party"
                                        }
                                    ]
                                },
                                {
                                    "key": "modified_on_solr",
                                    "value": "1696644644000"
                                },
                                {
                                    "key": "download_enabled",
                                    "value": 0
                                },
                                {
                                    "key": "secondary_language",
                                    "value": "Hindi"
                                },
                                {
                                    "key": "ppd",
                                    "value": 0
                                },
                                {
                                    "key": "is_premium",
                                    "value": 1
                                },
                                {
                                    "key": "preview_url",
                                    "value": {
                                        "message": "pSFO08Pw4dp3VRAsttmfT0IAjKH9TD83ae87pFTzfpQKPtv+O7ka7drzLSEJ1QK2j6HrvxqTNCEz1oEz5OCGuc7Kq+Fe5pbrBxoADZ2Pny29vK1ScQumFrK1hYDGzeF1Ii66hHcPsFl0MVjGJX1H9g==",
                                        "expiryTime": 1696704908
                                    }
                                }
                            ]
                        },
                        {
                            "language": "Hindi",
                            "seokey": "dil-to-pagal-hai",
                            "name": "Dil To Pagal Hai",
                            "artwork": "https://a10.gaanacdn.com/gn_img/albums/DwPKOxB3qV/wPKOoL6KqV/size_m.jpg",
                            "atw": "https://a10.gaanacdn.com/gn_img/albums/DwPKOxB3qV/wPKOoL6KqV/size_m.jpg",
                            "atwj": "https://a10.gaanacdn.com/gn_img/albums/DwPKOxB3qV/wPKOoL6KqV/size_m.jpg",
                            "entity_id": "703934",
                            "entity_type": "TR",
                            "artwork_medium": "https://a10.gaanacdn.com/gn_img/albums/DwPKOxB3qV/wPKOoL6KqV/size_l.jpg",
                            "favorite_count": 552008,
                            "premium_content": "0",
                            "user_favorite": 0,
                            "entity_info": [
                                {
                                    "key": "vgid",
                                    "value": "lmqbY"
                                },
                                {
                                    "key": "stream_url",
                                    "value": {
                                        "medium": {
                                            "message": "/PXDlMo67L4ssymkjHOGPNgaoh8Ou9LKJSyF01YhszTA27ak6q2ZblOlQnfxEBEhgZNaipur88393lI0q1wJBbv1Pc6Avk3CLGv3FzyuCG5u+6dKro3TbHNcKdjetzeohbRywZiFrIbhZ22ieKil5Ux3hgVk7hGYqZbI3fDnk8OFCZI3LIg/jKD4qkmN47jyI55rYPNwHVyexH0dkHaIxGZtnJ8/a+Zm4MWIQPumeY4Am0luByjD15U6tT19yxo5",
                                            "bitRate": "64",
                                            "expiryTime": 1696704908
                                        },
                                        "high": {
                                            "message": "/PXDlMo67L4ssymkjHOGPNgaoh8Ou9LKJSyF01YhszTA27ak6q2ZblOlQnfxEBEhTyVqmJvyEQrMw2WkdtQhF2VLKsn8pVGS0Oswe+cS6nsbEmjKPeayLa5QmzcqVyB7z+qLgwDBXFMS5rjOqNmh+HsqXAcExQScwgllY/u77ux04XykXimCgQ2V+ikuH7quuBXQT4cl/78DgMdpJB+n3CSjNV839LkvdSnN2i2/rZF+qzr8KuF6PhchB5hjS4zc",
                                            "bitRate": "96",
                                            "expiryTime": 1696704908
                                        },
                                        "auto": {
                                            "message": "/PXDlMo67L4ssymkjHOGPNgaoh8Ou9LKJSyF01YhszTA27ak6q2ZblOlQnfxEBEhjvk/+WFKNf3bC6Ywd+a6IL2EeVZ4cgmiw3xRMd2X7JwHz2fKL8+Gfz32zLKkUJZKXteQjnOvyn+b8yiTdA0HV8MK+Fr0/sIaScR2hqHCW91CObrTdT4/wGSJ2Iojb5sDfTmj2s8qYiQbsrlMekd7AWBghYj3mV31Y1iWiGPLRmLcY5c0rV76KWjhgBrLhRjS",
                                            "bitRate": "",
                                            "expiryTime": 1696704908
                                        }
                                    }
                                },
                                {
                                    "key": "artist",
                                    "value": [
                                        {
                                            "artist_id": "155",
                                            "name": "Lata Mangeshkar",
                                            "seokey": "lata-mangeshkar"
                                        },
                                        {
                                            "artist_id": "5",
                                            "name": "Udit Narayan",
                                            "seokey": "udit-narayan"
                                        }
                                    ]
                                },
                                {
                                    "key": "album",
                                    "value": [
                                        {
                                            "album_id": "71354",
                                            "name": "Dil To Pagal Hai",
                                            "album_seokey": "dil-to-pagal-hai-hindi"
                                        }
                                    ]
                                },
                                {
                                    "key": "operator",
                                    "value": [
                                        {
                                            "name": "JIO",
                                            "st": 1590019200000,
                                            "et": 1747785600000,
                                            "message": "Dil To Pagal",
                                            "short_code": "56789"
                                        }
                                    ]
                                },
                                {
                                    "key": "operators",
                                    "value": [
                                        {
                                            "name": "JIO",
                                            "st": 1590019200000,
                                            "et": 1747785600000,
                                            "message": "Dil To Pagal",
                                            "short_code": "56789"
                                        }
                                    ]
                                },
                                {
                                    "key": "lyrics_url",
                                    "value": "https://gaana.com/lyrics/dil-to-pagal-hai"
                                },
                                {
                                    "key": "parental_warning",
                                    "value": 0
                                },
                                {
                                    "key": "play_ct",
                                    "value": "78M+"
                                },
                                {
                                    "key": "artwork_large",
                                    "value": "https://a10.gaanacdn.com/gn_img/albums/DwPKOxB3qV/wPKOoL6KqV/size_l.jpg"
                                },
                                {
                                    "key": "sap_id",
                                    "value": ""
                                },
                                {
                                    "key": "country",
                                    "value": "1"
                                },
                                {
                                    "key": "mobile",
                                    "value": "1"
                                },
                                {
                                    "key": "duration",
                                    "value": "337"
                                },
                                {
                                    "key": "isrc",
                                    "value": "INY099700001"
                                },
                                {
                                    "key": "is_most_popular",
                                    "value": 0
                                },
                                {
                                    "key": "stream_type",
                                    "value": "rtmp"
                                },
                                {
                                    "key": "is_local",
                                    "value": "0"
                                },
                                {
                                    "key": "content_source",
                                    "value": 1
                                },
                                {
                                    "key": "av_ad",
                                    "value": 0
                                },
                                {
                                    "key": "youtube_id",
                                    "value": ""
                                },
                                {
                                    "key": "rest_lev",
                                    "value": "0"
                                },
                                {
                                    "key": "tags",
                                    "value": [
                                        {
                                            "tag_id": 103,
                                            "tag_name": "Romance"
                                        }
                                    ]
                                },
                                {
                                    "key": "modified_on_solr",
                                    "value": "1696644643000"
                                },
                                {
                                    "key": "download_enabled",
                                    "value": 0
                                },
                                {
                                    "key": "secondary_language",
                                    "value": "Hindi"
                                },
                                {
                                    "key": "ppd",
                                    "value": 0
                                },
                                {
                                    "key": "is_premium",
                                    "value": 1
                                },
                                {
                                    "key": "preview_url",
                                    "value": {
                                        "message": "pSFO08Pw4dp3VRAsttmfT0IAjKH9TD83ae87pFTzfpQKPtv+O7ka7drzLSEJ1QK2j6HrvxqTNCEz1oEz5OCGuc7Kq+Fe5pbrBxoADZ2Pny29vK1ScQumFrK1hYDGzeF1Ii66hHcPsFl0MVjGJX1H9g==",
                                        "expiryTime": 1696704908
                                    }
                                }
                            ]
                        },
                        {
                            "language": "Hindi",
                            "seokey": "tip-tip-barsa-paani-1",
                            "name": "Tip Tip Barsa Paani",
                            "artwork": "https://a10.gaanacdn.com/gn_img/albums/Oxd3xP3gVY/xd3xG6JDKg/size_m_1523089210.jpg",
                            "atw": "https://a10.gaanacdn.com/gn_img/albums/Oxd3xP3gVY/xd3xG6JDKg/size_m_1523089210.jpg",
                            "atwj": "https://a10.gaanacdn.com/gn_img/albums/Oxd3xP3gVY/xd3xG6JDKg/size_m_1523089210.jpg",
                            "entity_id": "14723248",
                            "entity_type": "TR",
                            "artwork_medium": "https://a10.gaanacdn.com/gn_img/albums/Oxd3xP3gVY/xd3xG6JDKg/size_l_1523089210.jpg",
                            "favorite_count": 480618,
                            "premium_content": "0",
                            "user_favorite": 0,
                            "entity_info": [
                                {
                                    "key": "vgid",
                                    "value": "l1zPq"
                                },
                                {
                                    "key": "stream_url",
                                    "value": {
                                        "medium": {
                                            "message": "/PXDlMo67L4ssymkjHOGPNgaoh8Ou9LKJSyF01YhszQ1ap8o2l0T7sZkQ+iIt6V9WqIalu79+HXoPlQF/O7C6tvNmcV0ZdzG/BoNO+GOAveEZXHCw1F+VLAMiU4S4mdGzNG3+6oWhXM0CKtgG74cYDXRTC8cWVrCYvhLwF9670nOxRt76Di68nTjs4QcRyrXwxw2sxz2D5Hoa1+BGJRV73rjmYzMJbQMl24FKIYyUIzOvHlkUuC9FQXhPdvlNUIW",
                                            "bitRate": "64",
                                            "expiryTime": 1696704908
                                        },
                                        "high": {
                                            "message": "/PXDlMo67L4ssymkjHOGPNgaoh8Ou9LKJSyF01YhszQ1ap8o2l0T7sZkQ+iIt6V9/RgHmsWjUb/pad8xe4ObTlSFrDITljbOxcemNk439Lk0pl/Sa64E/wjpsBYDZPs0jlzrhne/Gb1XYDG7uSXu6bncxkoZAceF8Y02kw7FS0n0F86hryCa5e/o3iDvPCkA0HCd2mLYpU2fEW6yTOznJH8n4fB579YF/+DEjKHOv3bDbiQeM56V7gaKBXinTuLo",
                                            "bitRate": "128",
                                            "expiryTime": 1696704908
                                        },
                                        "auto": {
                                            "message": "/PXDlMo67L4ssymkjHOGPNgaoh8Ou9LKJSyF01YhszQ1ap8o2l0T7sZkQ+iIt6V9haKZYCj/rU2QmFdvEIgzQv1ATeOSKss/n5o/EG4ZfKQ9kCGGPdzjfNwAlkbHq5mt8s55BWZA3h/y8HjYyObYEbWv74KwglLLpDOVqbL1VvGyXfN3o/PyMF9WUOb5hIbBZPUVyfHt/cFLM7u1a81AtkeNoUzS6/b+j3KRS1lhCpYeVkFvtmDebPG4N9ejkPTJ",
                                            "bitRate": "",
                                            "expiryTime": 1696704908
                                        }
                                    }
                                },
                                {
                                    "key": "artist",
                                    "value": [
                                        {
                                            "artist_id": "10",
                                            "name": "Alka Yagnik",
                                            "seokey": "alka-yagnik"
                                        },
                                        {
                                            "artist_id": "5",
                                            "name": "Udit Narayan",
                                            "seokey": "udit-narayan"
                                        }
                                    ]
                                },
                                {
                                    "key": "album",
                                    "value": [
                                        {
                                            "album_id": "1405230",
                                            "name": "Mohra",
                                            "album_seokey": "mohra"
                                        }
                                    ]
                                },
                                {
                                    "key": "operator",
                                    "value": [
                                        {
                                            "name": "JIO",
                                            "st": 1590019200000,
                                            "et": 1747785600000,
                                            "message": "Tip Tip Barsa",
                                            "short_code": "56789"
                                        },
                                        {
                                            "name": "IDEA",
                                            "st": 1301941800000,
                                            "et": 1617129000000,
                                            "message": "DT 5560",
                                            "short_code": "56789"
                                        },
                                        {
                                            "name": "VODAFONE",
                                            "st": 1136053800000,
                                            "et": 1614623400000,
                                            "message": "CT 1834658",
                                            "short_code": "56789"
                                        }
                                    ]
                                },
                                {
                                    "key": "operators",
                                    "value": [
                                        {
                                            "name": "JIO",
                                            "st": 1590019200000,
                                            "et": 1747785600000,
                                            "message": "Tip Tip Barsa",
                                            "short_code": "56789"
                                        },
                                        {
                                            "name": "IDEA",
                                            "st": 1301941800000,
                                            "et": 1617129000000,
                                            "message": "DT 5560",
                                            "short_code": "56789"
                                        },
                                        {
                                            "name": "VODAFONE",
                                            "st": 1136053800000,
                                            "et": 1614623400000,
                                            "message": "CT 1834658",
                                            "short_code": "56789"
                                        }
                                    ]
                                },
                                {
                                    "key": "lyrics_url",
                                    "value": "https://gaana.com/lyrics/tip-tip-barsa-paani-1"
                                },
                                {
                                    "key": "parental_warning",
                                    "value": 0
                                },
                                {
                                    "key": "play_ct",
                                    "value": "67M+"
                                },
                                {
                                    "key": "artwork_large",
                                    "value": "https://a10.gaanacdn.com/gn_img/albums/Oxd3xP3gVY/xd3xG6JDKg/size_l_1523089210.jpg"
                                },
                                {
                                    "key": "sap_id",
                                    "value": ""
                                },
                                {
                                    "key": "country",
                                    "value": "1"
                                },
                                {
                                    "key": "mobile",
                                    "value": "1"
                                },
                                {
                                    "key": "duration",
                                    "value": "364"
                                },
                                {
                                    "key": "isrc",
                                    "value": "IN-V11-94-00084"
                                },
                                {
                                    "key": "is_most_popular",
                                    "value": 0
                                },
                                {
                                    "key": "stream_type",
                                    "value": "rtmp"
                                },
                                {
                                    "key": "is_local",
                                    "value": "0"
                                },
                                {
                                    "key": "content_source",
                                    "value": 1
                                },
                                {
                                    "key": "av_ad",
                                    "value": 0
                                },
                                {
                                    "key": "youtube_id",
                                    "value": "j7tD6Arkv4I"
                                },
                                {
                                    "key": "rest_lev",
                                    "value": "0"
                                },
                                {
                                    "key": "tags",
                                    "value": [
                                        {
                                            "tag_id": 103,
                                            "tag_name": "Romance"
                                        }
                                    ]
                                },
                                {
                                    "key": "modified_on_solr",
                                    "value": "1696644644000"
                                },
                                {
                                    "key": "download_enabled",
                                    "value": 0
                                },
                                {
                                    "key": "secondary_language",
                                    "value": "Hindi"
                                },
                                {
                                    "key": "ppd",
                                    "value": 0
                                },
                                {
                                    "key": "is_premium",
                                    "value": 1
                                },
                                {
                                    "key": "preview_url",
                                    "value": {
                                        "message": "pSFO08Pw4dp3VRAsttmfT0IAjKH9TD83ae87pFTzfpQKPtv+O7ka7drzLSEJ1QK2j6HrvxqTNCEz1oEz5OCGuc7Kq+Fe5pbrBxoADZ2Pny29vK1ScQumFrK1hYDGzeF1Ii66hHcPsFl0MVjGJX1H9g==",
                                        "expiryTime": 1696704908
                                    }
                                }
                            ]
                        },
                        {
                            "language": "Hindi",
                            "seokey": "pehla-nasha-1",
                            "name": "Pehla Nasha",
                            "artwork": "https://a10.gaanacdn.com/gn_img/albums/ZaP374RWDy/aP37RJvKDy/size_m.jpg",
                            "atw": "https://a10.gaanacdn.com/gn_img/albums/ZaP374RWDy/aP37RJvKDy/size_m.jpg",
                            "atwj": "https://a10.gaanacdn.com/gn_img/albums/ZaP374RWDy/aP37RJvKDy/size_m.jpg",
                            "entity_id": "30222",
                            "entity_type": "TR",
                            "artwork_medium": "https://a10.gaanacdn.com/gn_img/albums/ZaP374RWDy/aP37RJvKDy/size_l.jpg",
                            "favorite_count": 733258,
                            "premium_content": "0",
                            "user_favorite": 0,
                            "entity_info": [
                                {
                                    "key": "vgid",
                                    "value": "YRE1R"
                                },
                                {
                                    "key": "stream_url",
                                    "value": {
                                        "medium": {
                                            "message": "/PXDlMo67L4ssymkjHOGPNgaoh8Ou9LKJSyF01YhszQxZbbjVCFbFf9BfB+h0Z+D+d3CRj6fefeOG7sYDFdx28qozkn+MXPYr3ZKwHK4KHdO7rOXU0QF3FtcyeYadfqvJLp+pD8lt6R0J8jOQCUH3D+bQM7obtw3/TnuywkG63bEXXsZa9TqjLxbA4h/JO2ZE6w4io6iVamPyBCsoboql+dlXGirkdpV+lsOaL3bJ+6D2iiP0OXqYl2x6AKyeOfn",
                                            "bitRate": "64",
                                            "expiryTime": 1696704908
                                        },
                                        "high": {
                                            "message": "/PXDlMo67L4ssymkjHOGPNgaoh8Ou9LKJSyF01YhszQxZbbjVCFbFf9BfB+h0Z+DnWnAM1qU04k4wszsJsccrowC9bt+HPsiXR8d4X4QRE+Q1TnDwoy7DtvA8SPpNJStZ9cjte7BXbpFcf9VLwBlU5LFeHLJCblStN3F84nPAoDwHsN5BtWqm4NbmbsDOkt2ganDNjfTPXW8vdj6zVSuU3ZRrOhNS3rXpYfrRCThEiEWcnP8gHIKHzQuEKOnQNK1",
                                            "bitRate": "128",
                                            "expiryTime": 1696704908
                                        },
                                        "auto": {
                                            "message": "/PXDlMo67L4ssymkjHOGPNgaoh8Ou9LKJSyF01YhszQxZbbjVCFbFf9BfB+h0Z+DogLtZ9qOxIv3zriqlLs+vxi3fhskYn8lj08UI1uVTTXuPQTyciXhleCuT2fRpBB7stb6i7+1S6FKRyj/ERtiyukXzgMFk9BFXeVfc5GYvMlPXBXe1OnFqvbfLt35jVWZ2FMuBVFUX18ZyB+ocQ1hVHBOBfsbOW5TKY3aV/bGd5ydU01aLbepa+UkhV6fQWwC",
                                            "bitRate": "",
                                            "expiryTime": 1696704908
                                        }
                                    }
                                },
                                {
                                    "key": "artist",
                                    "value": [
                                        {
                                            "artist_id": "5",
                                            "name": "Udit Narayan",
                                            "seokey": "udit-narayan"
                                        },
                                        {
                                            "artist_id": "10584",
                                            "name": "Sadhana Sargam",
                                            "seokey": "sadhana-sargam-1"
                                        }
                                    ]
                                },
                                {
                                    "key": "album",
                                    "value": [
                                        {
                                            "album_id": "22899",
                                            "name": "Jo Jeeta Wohi Sikandar",
                                            "album_seokey": "jo-jeeta-wohi-sikandar"
                                        }
                                    ]
                                },
                                {
                                    "key": "operator",
                                    "value": [
                                        {
                                            "name": "JIO",
                                            "st": 1590019200000,
                                            "et": 1747785600000,
                                            "message": "Pehla Nasha",
                                            "short_code": "56789"
                                        }
                                    ]
                                },
                                {
                                    "key": "operators",
                                    "value": [
                                        {
                                            "name": "JIO",
                                            "st": 1590019200000,
                                            "et": 1747785600000,
                                            "message": "Pehla Nasha",
                                            "short_code": "56789"
                                        }
                                    ]
                                },
                                {
                                    "key": "lyrics_url",
                                    "value": ""
                                },
                                {
                                    "key": "parental_warning",
                                    "value": 0
                                },
                                {
                                    "key": "play_ct",
                                    "value": "87M+"
                                },
                                {
                                    "key": "artwork_large",
                                    "value": "https://a10.gaanacdn.com/gn_img/albums/ZaP374RWDy/aP37RJvKDy/size_l.jpg"
                                },
                                {
                                    "key": "sap_id",
                                    "value": ""
                                },
                                {
                                    "key": "country",
                                    "value": "1"
                                },
                                {
                                    "key": "mobile",
                                    "value": "1"
                                },
                                {
                                    "key": "duration",
                                    "value": "293"
                                },
                                {
                                    "key": "isrc",
                                    "value": "INH109235800"
                                },
                                {
                                    "key": "is_most_popular",
                                    "value": 0
                                },
                                {
                                    "key": "stream_type",
                                    "value": "https"
                                },
                                {
                                    "key": "is_local",
                                    "value": "0"
                                },
                                {
                                    "key": "content_source",
                                    "value": 1
                                },
                                {
                                    "key": "av_ad",
                                    "value": 0
                                },
                                {
                                    "key": "youtube_id",
                                    "value": ""
                                },
                                {
                                    "key": "rest_lev",
                                    "value": "0"
                                },
                                {
                                    "key": "tags",
                                    "value": [
                                        {
                                            "tag_id": 103,
                                            "tag_name": "Romance"
                                        }
                                    ]
                                },
                                {
                                    "key": "modified_on_solr",
                                    "value": "1696644644000"
                                },
                                {
                                    "key": "download_enabled",
                                    "value": 0
                                },
                                {
                                    "key": "secondary_language",
                                    "value": "Hindi"
                                },
                                {
                                    "key": "ppd",
                                    "value": 1
                                },
                                {
                                    "key": "is_premium",
                                    "value": 1
                                },
                                {
                                    "key": "preview_url",
                                    "value": {
                                        "message": "pSFO08Pw4dp3VRAsttmfT0IAjKH9TD83ae87pFTzfpQKPtv+O7ka7drzLSEJ1QK2j6HrvxqTNCEz1oEz5OCGuc7Kq+Fe5pbrBxoADZ2Pny29vK1ScQumFrK1hYDGzeF1Ii66hHcPsFl0MVjGJX1H9g==",
                                        "expiryTime": 1696704908
                                    }
                                }
                            ]
                        },
                        {
                            "language": "Hindi",
                            "seokey": "main-yahaan-hoon",
                            "name": "Main Yahaan Hoon",
                            "artwork": "https://a10.gaanacdn.com/gn_img/albums/jBr3gLyWR1/Br3ga6QbR1/size_m.jpg",
                            "atw": "https://a10.gaanacdn.com/gn_img/albums/jBr3gLyWR1/Br3ga6QbR1/size_m.jpg",
                            "atwj": "https://a10.gaanacdn.com/gn_img/albums/jBr3gLyWR1/Br3ga6QbR1/size_m.jpg",
                            "entity_id": "704138",
                            "entity_type": "TR",
                            "artwork_medium": "https://a10.gaanacdn.com/gn_img/albums/jBr3gLyWR1/Br3ga6QbR1/size_l.jpg",
                            "favorite_count": 456283,
                            "premium_content": "0",
                            "user_favorite": 0,
                            "entity_info": [
                                {
                                    "key": "vgid",
                                    "value": "lmqbY"
                                },
                                {
                                    "key": "stream_url",
                                    "value": {
                                        "medium": {
                                            "message": "/PXDlMo67L4ssymkjHOGPNgaoh8Ou9LKJSyF01YhszRD0HkEtkxRxTH1D9C/FP36QMXOLhoFsxKssMsfOFK/tqOwX6mmFvmK/C8TGOfM3NxUpBlw0176rH5vRoefAhgywF3fZGVpiLRo95gwA6xg7dnqP0ouJAVoVHUXDq4gif86+72TZ9lLra4zXiXJwCYj6uZ+475Raju9WQvkMGRghs6qHkWFWxoGtrVUOyraIsxQoUOKUlvuQdjJtmevDziG",
                                            "bitRate": "64",
                                            "expiryTime": 1696704908
                                        },
                                        "high": {
                                            "message": "/PXDlMo67L4ssymkjHOGPNgaoh8Ou9LKJSyF01YhszRD0HkEtkxRxTH1D9C/FP36MRdHbkk5qvm/h1yKm3Mol19bsd/lKiOoxzEvkqVWOwTQq2u90pVC243mtpo0yttSZGNNJ5gbFigkbMzDL6qPeZm4aB3cRmsGieeflOOqO8S8MNU7+sezWOaOH7O2hTo6BUXgbgu7kdgYxj594sJHLaCN6qEHUFf9owvpBE8HVjNOiA51EOwcRWVv7xtqwoET",
                                            "bitRate": "96",
                                            "expiryTime": 1696704908
                                        },
                                        "auto": {
                                            "message": "/PXDlMo67L4ssymkjHOGPNgaoh8Ou9LKJSyF01YhszRD0HkEtkxRxTH1D9C/FP36siavFRotw1j3m8/xOO1nr4L7QCXxV7JbwxSl9BIrqYW8o1NPdS9Svlyjymf8jA62EE/DBh/2FkIeYqazE6uEAjdfzpKE9Wt7rgtf2RUFu4tppa1KnNFPg0zRK8M/WVactq0cJdeTDX+tSEpWlm0E9Mmu7H3AQsF5m2eoX43WWjAzDLj2W2UKa+4nA4ggW0pc",
                                            "bitRate": "",
                                            "expiryTime": 1696704908
                                        }
                                    }
                                },
                                {
                                    "key": "artist",
                                    "value": [
                                        {
                                            "artist_id": "5",
                                            "name": "Udit Narayan",
                                            "seokey": "udit-narayan"
                                        }
                                    ]
                                },
                                {
                                    "key": "album",
                                    "value": [
                                        {
                                            "album_id": "71379",
                                            "name": "Veer-Zaara",
                                            "album_seokey": "veer-zaara"
                                        }
                                    ]
                                },
                                {
                                    "key": "operator",
                                    "value": [
                                        {
                                            "name": "JIO",
                                            "st": 1590019200000,
                                            "et": 1747785600000,
                                            "message": "Main Yahaan Hoon",
                                            "short_code": "56789"
                                        }
                                    ]
                                },
                                {
                                    "key": "operators",
                                    "value": [
                                        {
                                            "name": "JIO",
                                            "st": 1590019200000,
                                            "et": 1747785600000,
                                            "message": "Main Yahaan Hoon",
                                            "short_code": "56789"
                                        }
                                    ]
                                },
                                {
                                    "key": "lyrics_url",
                                    "value": "https://gaana.com/lyrics/main-yahaan-hoon"
                                },
                                {
                                    "key": "parental_warning",
                                    "value": 0
                                },
                                {
                                    "key": "play_ct",
                                    "value": "40M+"
                                },
                                {
                                    "key": "artwork_large",
                                    "value": "https://a10.gaanacdn.com/gn_img/albums/jBr3gLyWR1/Br3ga6QbR1/size_l.jpg"
                                },
                                {
                                    "key": "sap_id",
                                    "value": ""
                                },
                                {
                                    "key": "country",
                                    "value": "1"
                                },
                                {
                                    "key": "mobile",
                                    "value": "1"
                                },
                                {
                                    "key": "duration",
                                    "value": "297"
                                },
                                {
                                    "key": "isrc",
                                    "value": "INY090400016"
                                },
                                {
                                    "key": "is_most_popular",
                                    "value": 0
                                },
                                {
                                    "key": "stream_type",
                                    "value": "rtmp"
                                },
                                {
                                    "key": "is_local",
                                    "value": "0"
                                },
                                {
                                    "key": "content_source",
                                    "value": 1
                                },
                                {
                                    "key": "av_ad",
                                    "value": 0
                                },
                                {
                                    "key": "youtube_id",
                                    "value": ""
                                },
                                {
                                    "key": "rest_lev",
                                    "value": "0"
                                },
                                {
                                    "key": "tags",
                                    "value": [
                                        {
                                            "tag_id": 103,
                                            "tag_name": "Romance"
                                        }
                                    ]
                                },
                                {
                                    "key": "modified_on_solr",
                                    "value": "1696644644000"
                                },
                                {
                                    "key": "download_enabled",
                                    "value": 0
                                },
                                {
                                    "key": "secondary_language",
                                    "value": "Hindi"
                                },
                                {
                                    "key": "ppd",
                                    "value": 0
                                },
                                {
                                    "key": "is_premium",
                                    "value": 1
                                },
                                {
                                    "key": "preview_url",
                                    "value": {
                                        "message": "pSFO08Pw4dp3VRAsttmfT0IAjKH9TD83ae87pFTzfpQKPtv+O7ka7drzLSEJ1QK2j6HrvxqTNCEz1oEz5OCGuc7Kq+Fe5pbrBxoADZ2Pny29vK1ScQumFrK1hYDGzeF1Ii66hHcPsFl0MVjGJX1H9g==",
                                        "expiryTime": 1696704908
                                    }
                                }
                            ]
                        },
                        {
                            "language": "Hindi",
                            "seokey": "jaadu-teri-nazar-2",
                            "name": "Jaadu Teri Nazar",
                            "artwork": "https://a10.gaanacdn.com/gn_img/albums/VdNW0JMKo5/dNW05ZMbo5/size_m.jpg",
                            "atw": "https://a10.gaanacdn.com/gn_img/albums/VdNW0JMKo5/dNW05ZMbo5/size_m.jpg",
                            "atwj": "https://a10.gaanacdn.com/gn_img/albums/VdNW0JMKo5/dNW05ZMbo5/size_m.jpg",
                            "entity_id": "66867",
                            "entity_type": "TR",
                            "artwork_medium": "https://a10.gaanacdn.com/gn_img/albums/VdNW0JMKo5/dNW05ZMbo5/size_l.jpg",
                            "favorite_count": 463037,
                            "premium_content": "0",
                            "user_favorite": 0,
                            "entity_info": [
                                {
                                    "key": "vgid",
                                    "value": "YRE1R"
                                },
                                {
                                    "key": "stream_url",
                                    "value": {
                                        "medium": {
                                            "message": "/PXDlMo67L4ssymkjHOGPNgaoh8Ou9LKJSyF01YhszTsDp4MF7VsXegSEbZMEXsYtRA0dA81ptM0eLXhxoKdc9n8wU015iBX6Ohbd77TIW6Nt5IbP12QE0xnWE+hiV9xlf2+/EdFK1QZ7MOSotZXtPyjeKj1pZKJbn+NqxU35JRp8NiDX0u9h5nEXeveuv9ZTRANRt9Gapq5tfnO7Bq7FQdGRw2/r5e6ZMyZxKkcP/t5kmmVmlfjGQNavirjn/FJ",
                                            "bitRate": "64",
                                            "expiryTime": 1696704908
                                        },
                                        "high": {
                                            "message": "/PXDlMo67L4ssymkjHOGPNgaoh8Ou9LKJSyF01YhszTsDp4MF7VsXegSEbZMEXsYIz37usRzo7xZYJel7e5ODuQr91JhSyp/iNXJqCzCQHY9yFSvd45GHcu6PTXmy4wdqZv8J38zLp9ZCiVN4H+LjedXCHrsZDSfM06eurvkw5k314tcpFLAC1r3lDe38Wc9KphOYV9jH2Y8OJA49z9fjMz5QCXocTVs+kXyDDAes6JYEVGVbeIvxUfDu7LgX/Wy",
                                            "bitRate": "128",
                                            "expiryTime": 1696704908
                                        },
                                        "auto": {
                                            "message": "/PXDlMo67L4ssymkjHOGPNgaoh8Ou9LKJSyF01YhszTsDp4MF7VsXegSEbZMEXsYtCKvONymZkKAnHtx2yC4Q/oJRWWV3edM8ygX7Rf1HJZjZZ0e+rN8/FybWufaPncUYGoVhZNS29hX9VA009C5CIREGuGK8w0tIq6sKfFAjytBsVl3pzAHpdfG4IE6WS8e/ZNOZhZVktSRHhPAd14ILcHjzC648p7aqFCxIyZJC7DQk9qhyE/YSywkqRjFi8dU",
                                            "bitRate": "",
                                            "expiryTime": 1696704908
                                        }
                                    }
                                },
                                {
                                    "key": "artist",
                                    "value": [
                                        {
                                            "artist_id": "5",
                                            "name": "Udit Narayan",
                                            "seokey": "udit-narayan"
                                        }
                                    ]
                                },
                                {
                                    "key": "album",
                                    "value": [
                                        {
                                            "album_id": "14375",
                                            "name": "Darr ",
                                            "album_seokey": "darr"
                                        }
                                    ]
                                },
                                {
                                    "key": "operator",
                                    "value": [
                                        {
                                            "name": "JIO",
                                            "st": 1590019200000,
                                            "et": 1747785600000,
                                            "message": "Jaadu Teri Nazar",
                                            "short_code": "56789"
                                        }
                                    ]
                                },
                                {
                                    "key": "operators",
                                    "value": [
                                        {
                                            "name": "JIO",
                                            "st": 1590019200000,
                                            "et": 1747785600000,
                                            "message": "Jaadu Teri Nazar",
                                            "short_code": "56789"
                                        }
                                    ]
                                },
                                {
                                    "key": "lyrics_url",
                                    "value": ""
                                },
                                {
                                    "key": "parental_warning",
                                    "value": 0
                                },
                                {
                                    "key": "play_ct",
                                    "value": "55M+"
                                },
                                {
                                    "key": "artwork_large",
                                    "value": "https://a10.gaanacdn.com/gn_img/albums/VdNW0JMKo5/dNW05ZMbo5/size_l.jpg"
                                },
                                {
                                    "key": "sap_id",
                                    "value": ""
                                },
                                {
                                    "key": "country",
                                    "value": "1"
                                },
                                {
                                    "key": "mobile",
                                    "value": "1"
                                },
                                {
                                    "key": "duration",
                                    "value": "281"
                                },
                                {
                                    "key": "isrc",
                                    "value": "INH109338540"
                                },
                                {
                                    "key": "is_most_popular",
                                    "value": 0
                                },
                                {
                                    "key": "stream_type",
                                    "value": "https"
                                },
                                {
                                    "key": "is_local",
                                    "value": "0"
                                },
                                {
                                    "key": "content_source",
                                    "value": 1
                                },
                                {
                                    "key": "av_ad",
                                    "value": 0
                                },
                                {
                                    "key": "youtube_id",
                                    "value": ""
                                },
                                {
                                    "key": "rest_lev",
                                    "value": "0"
                                },
                                {
                                    "key": "tags",
                                    "value": [
                                        {
                                            "tag_id": 103,
                                            "tag_name": "Romance"
                                        }
                                    ]
                                },
                                {
                                    "key": "modified_on_solr",
                                    "value": "1696644644000"
                                },
                                {
                                    "key": "download_enabled",
                                    "value": 0
                                },
                                {
                                    "key": "secondary_language",
                                    "value": "Hindi"
                                },
                                {
                                    "key": "ppd",
                                    "value": 1
                                },
                                {
                                    "key": "is_premium",
                                    "value": 1
                                },
                                {
                                    "key": "preview_url",
                                    "value": {
                                        "message": "pSFO08Pw4dp3VRAsttmfT0IAjKH9TD83ae87pFTzfpQKPtv+O7ka7drzLSEJ1QK2j6HrvxqTNCEz1oEz5OCGuc7Kq+Fe5pbrBxoADZ2Pny29vK1ScQumFrK1hYDGzeF1Ii66hHcPsFl0MVjGJX1H9g==",
                                        "expiryTime": 1696704908
                                    }
                                }
                            ]
                        },
                        {
                            "language": "Hindi",
                            "seokey": "kuch-kuch-hota-hai-4",
                            "name": "Kuch Kuch Hota Hai",
                            "artwork": "https://a10.gaanacdn.com/gn_img/albums/Bp1bAnK029/p1bAExnb02/size_m.jpg",
                            "atw": "https://a10.gaanacdn.com/gn_img/albums/Bp1bAnK029/p1bAExnb02/size_m.jpg",
                            "atwj": "https://a10.gaanacdn.com/gn_img/albums/Bp1bAnK029/p1bAExnb02/size_m.jpg",
                            "entity_id": "553996",
                            "entity_type": "TR",
                            "artwork_medium": "https://a10.gaanacdn.com/gn_img/albums/Bp1bAnK029/p1bAExnb02/size_l.jpg",
                            "favorite_count": 494298,
                            "premium_content": "0",
                            "user_favorite": 0,
                            "entity_info": [
                                {
                                    "key": "vgid",
                                    "value": "AK9OR"
                                },
                                {
                                    "key": "stream_url",
                                    "value": {
                                        "medium": {
                                            "message": "/PXDlMo67L4ssymkjHOGPNgaoh8Ou9LKJSyF01YhszSxlf+WTP96Xi2yTtXt9hBu+f8W0DqN/p/V4osh4RmoMpHif92Km8/boVy14EyyaVb2QAe9JeKvpmPzLedjrOUp8HfHwLZdqjDqzhn7ERf8X4M4ZVQ7YNOJwevG8cHgYIfobHyciHH8Kwr3w7TUt7+4GCavQ82rNW9DZIdCSiBwkZTWazuwbDtW6d3jdSSaQwPQjSg8SxyNdyr3p4DSo02g",
                                            "bitRate": "64",
                                            "expiryTime": 1696704908
                                        },
                                        "high": {
                                            "message": "/PXDlMo67L4ssymkjHOGPNgaoh8Ou9LKJSyF01YhszSxlf+WTP96Xi2yTtXt9hBugD4uI9Cw4OdaPBwuw5g/jyzC+la1gNp37TNZnLZNNTSUZkuPh89k4f6xdlXvXHJTmLdNsTSmQbT/4CLgLMBbebvBfxf2USXRqfpt0tO3t9e51y+5gOXtNMMGlszL/u8se+01qyDON1GwL1bUdMd0XrgZWMRjD/gkWqzsatPrxOGa2QgROVt4/6w/0dtiJ4DF",
                                            "bitRate": "96",
                                            "expiryTime": 1696704908
                                        },
                                        "auto": {
                                            "message": "/PXDlMo67L4ssymkjHOGPNgaoh8Ou9LKJSyF01YhszSxlf+WTP96Xi2yTtXt9hBussDW6lFE3uRKLnPBL2YXdgz4CT2GiD2GrPGcbPsicBuPGL/+ZsbaSrBjm2y/+J2e6pquMgMzwbbZvBL0eWACaUbCtP6w9gaHV1toT7eRoyQ8gjcjLnqRbfKcOdb56UJQBI7XN16Q1XZ7WxD+2/VIFD3CPXYyX03hsFjurOBENSRhdyHo3HLLEfBuWnBiVwM7",
                                            "bitRate": "",
                                            "expiryTime": 1696704908
                                        }
                                    }
                                },
                                {
                                    "key": "artist",
                                    "value": [
                                        {
                                            "artist_id": "5",
                                            "name": "Udit Narayan",
                                            "seokey": "udit-narayan"
                                        },
                                        {
                                            "artist_id": "10",
                                            "name": "Alka Yagnik",
                                            "seokey": "alka-yagnik"
                                        },
                                        {
                                            "artist_id": "55969",
                                            "name": "Jatin-Lalit",
                                            "seokey": "jatin-lalit"
                                        }
                                    ]
                                },
                                {
                                    "key": "album",
                                    "value": [
                                        {
                                            "album_id": "57219",
                                            "name": "Kuch Kuch Hota Hai (Original Motion Picture Soundtrack)",
                                            "album_seokey": "kuch-kuch-hota-hai"
                                        }
                                    ]
                                },
                                {
                                    "key": "operator",
                                    "value": [
                                        {
                                            "name": "JIO",
                                            "st": 1590019200000,
                                            "et": 1747785600000,
                                            "message": "Kuch Kuch Hota",
                                            "short_code": "56789"
                                        }
                                    ]
                                },
                                {
                                    "key": "operators",
                                    "value": [
                                        {
                                            "name": "JIO",
                                            "st": 1590019200000,
                                            "et": 1747785600000,
                                            "message": "Kuch Kuch Hota",
                                            "short_code": "56789"
                                        }
                                    ]
                                },
                                {
                                    "key": "lyrics_url",
                                    "value": ""
                                },
                                {
                                    "key": "parental_warning",
                                    "value": 0
                                },
                                {
                                    "key": "play_ct",
                                    "value": "55M+"
                                },
                                {
                                    "key": "artwork_large",
                                    "value": "https://a10.gaanacdn.com/gn_img/albums/Bp1bAnK029/p1bAExnb02/size_l.jpg"
                                },
                                {
                                    "key": "sap_id",
                                    "value": ""
                                },
                                {
                                    "key": "country",
                                    "value": "1"
                                },
                                {
                                    "key": "mobile",
                                    "value": "1"
                                },
                                {
                                    "key": "duration",
                                    "value": "298"
                                },
                                {
                                    "key": "isrc",
                                    "value": "INS179900049"
                                },
                                {
                                    "key": "is_most_popular",
                                    "value": 0
                                },
                                {
                                    "key": "stream_type",
                                    "value": "rtmp"
                                },
                                {
                                    "key": "is_local",
                                    "value": "0"
                                },
                                {
                                    "key": "content_source",
                                    "value": 1
                                },
                                {
                                    "key": "av_ad",
                                    "value": 0
                                },
                                {
                                    "key": "youtube_id",
                                    "value": "-ijfNEF7-JY"
                                },
                                {
                                    "key": "rest_lev",
                                    "value": "0"
                                },
                                {
                                    "key": "tags",
                                    "value": [
                                        {
                                            "tag_id": 103,
                                            "tag_name": "Romance"
                                        }
                                    ]
                                },
                                {
                                    "key": "modified_on_solr",
                                    "value": "1696644644000"
                                },
                                {
                                    "key": "download_enabled",
                                    "value": 0
                                },
                                {
                                    "key": "secondary_language",
                                    "value": "Hindi"
                                },
                                {
                                    "key": "ppd",
                                    "value": 0
                                },
                                {
                                    "key": "is_premium",
                                    "value": 1
                                },
                                {
                                    "key": "preview_url",
                                    "value": {
                                        "message": "pSFO08Pw4dp3VRAsttmfT0IAjKH9TD83ae87pFTzfpQKPtv+O7ka7drzLSEJ1QK2j6HrvxqTNCEz1oEz5OCGuc7Kq+Fe5pbrBxoADZ2Pny29vK1ScQumFrK1hYDGzeF1Ii66hHcPsFl0MVjGJX1H9g==",
                                        "expiryTime": 1696704908
                                    }
                                }
                            ]
                        }
                    ],
                    "user_token_status": "0"
                }
            ).as('getArtistList')
            cy.visit('https://gaana.com/')
            cy.get('.t_wrap [href="/song/udd-jaa-kaale-kaava-from-gadar-2"]').click()
            cy.wait('@getArtistList').then(({response})=>{
                cy.log(response)
            })
        })

    })
});