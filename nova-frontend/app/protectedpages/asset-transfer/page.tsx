import AssetTransferTable from '../../../components/asset-transfer-table';
import TransferAssetForm from "@/components/transfer-asset-form"
import IncomingTransfer from "@/components/incoming-transfers"
import ProtectedRoute from "@/components/ProtectedRoute";
import AssetsSection from "@/components/assets-section";


export default function Page() {
  return (
    <ProtectedRoute>
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div>

              <IncomingTransfer />
              <AssetsSection />
              <TransferAssetForm />
            </div>
            <AssetTransferTable />
          </div>
        </div>
    </ProtectedRoute>  
  )
}
