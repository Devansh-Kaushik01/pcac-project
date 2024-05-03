"use client"

const GoogleMap = () => {
    return (
        <div className="w-full h-80 pb-10">
            <iframe width={"100%"} height={"100%"} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.460370888049!2d76.68253407537193!3d30.705455674597363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390feff2bece99dd%3A0x5980c852d1a27c2c!2sSynswift!5e0!3m2!1sen!2sin!4v1713791279896!5m2!1sen!2sin" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    );
};
export default GoogleMap;