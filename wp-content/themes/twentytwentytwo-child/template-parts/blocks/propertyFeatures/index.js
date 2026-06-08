(function (blocks, element, blockEditor, data) {
	const { registerBlockType } = blocks;
	const { createElement: el, useState, useEffect } = element;
	const { useBlockProps } = blockEditor;
	const { useSelect } = data;

	registerBlockType('custom/propertyfeatures', {
		edit() {
			const blockProps = useBlockProps();

			const postId = useSelect(
				(select) => select('core/editor').getCurrentPostId(),
				[]
			);

			const [property, setProperty] = useState(null);

			useEffect(() => {
				if (!postId) return;

				fetch(`/wp-json/wp/v2/property/${postId}?_embed`)
					.then((res) => res.json())
					.then((data) => setProperty(data));
			}, [postId]);

			if (!property) {
				return el('p', {}, 'Loading...');

			}

			const imageUrl =
				property?._embedded?.['wp:featuredmedia']?.[0]?.source_url;

			return el(
				'div',
				{
					...blockProps,
					style: {
						border: '1px solid #ddd',
						padding: '20px',
						background: '#fff'
					}
				},
				[
					imageUrl &&
					el('img', {
						src: imageUrl,
						style: {
							width: '100%',
							maxHeight: '300px',
							objectFit: 'cover',
							marginBottom: '15px'
						}
					}),

					el(
						'div',
						{
							style: {
								display: 'grid',
								gridTemplateColumns: '1fr 1fr',
								gap: '10px'
							}
						},
						[
							el(
								'div',
								{},
								`🛏 ${property.acf.bedrooms} bedrooms`
							),

							el(
								'div',
								{},
								`🛁 ${property.acf.bathrooms} bathrooms`
							),

							property.acf.has_parking
								? el('div', {}, '🚗 Parking available')
								: null,

							property.acf.pet_friendly
								? el('div', {}, '🐶 Pet friendly')
								: null
						]
					),

					el(
						'div',
						{
							style: {
								marginTop: '20px',
								fontSize: '24px',
								fontWeight: 'bold',
								textAlign: 'center'
							}
						},
						`£${property.acf.price}`
					)
				]
			);
		},

		save() {
			return null;
		}
	});
})(
	window.wp.blocks,
	window.wp.element,
	window.wp.blockEditor,
	window.wp.data
);