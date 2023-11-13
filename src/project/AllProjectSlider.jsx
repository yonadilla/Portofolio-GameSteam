import PropTypes from 'prop-types'
import { DataModal } from '../Data/dataModal';

function AllProjectSlider(props) {
  const {setModal} = props
  return (
    
    <div>
    <div className=" absolute w-screen top-36">
      <swiper-container
        slides-per-view="1"
        speed="500"
        loop="true"
        css-mode="true"
        navigation="true"
        pagination="true"
        scrollbar="true"
      >
        {DataModal.map(
          (modal) => {
            return (
              <swiper-slide key={modal.id}>
                <div>
                  <p>{modal.Title}</p>
                  <button>
                    <img
                      src={modal.gif}
                      onClick={() => setModal(modal.modal)}
                      alt=""
                      className=""
                    />
                  </button>
                </div>
              </swiper-slide>
            );
          }
        )}
      </swiper-container>
    </div>
</div>
  )
}

AllProjectSlider.propTypes = {
  setModal : PropTypes.func.isRequired,
}

export default AllProjectSlider

