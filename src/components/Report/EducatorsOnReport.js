import React from 'react'
//the term Educator has changed to Expert on the client facing side
//get random subarray from total educator select
const getRandomSubarray = (arr, size) =>{
        let shuffled = arr.slice(0), i = arr.length, temp, index;
        while (i--) {
            index = Math.floor((i + 1) * Math.random());
            temp = shuffled[index];
            shuffled[index] = shuffled[i];
            shuffled[i] = temp;
        }
        return shuffled.slice(0, size);
    }

const EducatorsOnReport = ({ educators }) => {
    let educatorsSubArray = []
    //randomize if there are too many relevant experts
    if (educators.length>3){
        educatorsSubArray = getRandomSubarray(educators,3)
    } else if ( educators.length <=3){
        educatorsSubArray = educators
    }
    return (<>
        {/* display the educator cards on the report */}
        <div className="flex-row-space-evenly">
        {educatorsSubArray[0] && educatorsSubArray.map((edu, i) => (
            <div className="horizontal-card__structure" key={i}>
                <div className="horizontal-card__imageContainer">
                    <img className="horizontal-card__imageContainer__image" src={edu.image_url} />
                </div>
                <div className="horizontal-card__details" >
                    <div className="horizontal-card__details__title">
                        {edu.name}
                    </div>
                    <div className="horizontal-card__details__description" >
                        {edu.bio.substring(0,54)}
                    </div>
                    <ul className="horizontal-card__details__specialties">
                        <p className="horizontal-card__details__specialties__specialties-title">Specialties:</p>
                        {edu.specialties[0][0] !== null 
                            && edu.specialties.map((specialty, i) => { 
                                    return <li key={i}> - {specialty[1]}</li> 
                                })
                        }
                    </ul>
                    <div className="horizontal-card__details__contact" >
                        <i className="far fa-envelope fa-xs"></i> {edu.contact_info}
                    </div>
                </div>
            </div>
        ))}
        </div>
    </>
    )
}


export default EducatorsOnReport